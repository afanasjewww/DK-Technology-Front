'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { Button, Input, Select, Textarea, Card } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';
import { rentalPricing, rentalConditions } from '@/lib';
import { formatPrice } from '@/utils';

function PriceCountDown({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionVal = useMotionValue(value * 3);
  const [display, setDisplay] = useState(formatPrice(value * 3));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, value, {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(formatPrice(Math.round(v))),
    });
    return () => controls.stop();
  }, [isInView, value, motionVal]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export function RentalContent() {
  const t = useTranslations('rental');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      await fetch('/api/rental', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-16">
      {/* Conditions */}
      <ScrollReveal>
        <h3 className="text-2xl font-bold text-dk-gray-900 mb-6">{t('conditions_title')}</h3>
        <ul className="space-y-3 max-w-2xl">
          {rentalConditions.map((condition, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-dk-red-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span className="text-dk-gray-600">{condition}</span>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      {/* Pricing Table */}
      <ScrollReveal delay={0.2}>
        <h3 className="text-2xl font-bold text-dk-gray-900 mb-6">{t('pricing_title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-dk-gray-200">
                <th className="text-left py-3 px-4 text-dk-gray-500 font-medium">{t('booking_type')}</th>
                <th className="text-center py-3 px-4 text-dk-gray-500 font-medium">{t('hourly')}</th>
                <th className="text-center py-3 px-4 text-dk-gray-500 font-medium">{t('daily')}</th>
                <th className="text-center py-3 px-4 text-dk-gray-500 font-medium">{t('weekly')}</th>
                <th className="text-center py-3 px-4 text-dk-gray-500 font-medium">{t('deposit')}</th>
              </tr>
            </thead>
            <tbody>
              {rentalPricing.map(p => (
                <tr key={p.vehicleType} className="border-b border-dk-gray-100 hover:bg-dk-gray-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-dk-gray-900">{p.label}</td>
                  <td className="py-4 px-4 text-center text-dk-gray-700"><PriceCountDown value={p.hourly} /></td>
                  <td className="py-4 px-4 text-center text-dk-gray-700"><PriceCountDown value={p.daily} /></td>
                  <td className="py-4 px-4 text-center text-dk-gray-700"><PriceCountDown value={p.weekly} /></td>
                  <td className="py-4 px-4 text-center text-dk-red-500 font-semibold"><PriceCountDown value={p.deposit} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      {/* Booking Form */}
      <ScrollReveal delay={0.3}>
        <Card className="max-w-2xl mx-auto p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-dk-gray-900 mb-6">{t('booking_title')}</h3>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg text-dk-gray-700">{t('booking_success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="name" label={t('booking_name')} placeholder={t('booking_name')} required />
                <Input name="phone" label={t('booking_phone')} placeholder="+7 (___) ___-__-__" required />
              </div>
              <Input name="email" label={t('booking_email')} type="email" placeholder="email@example.com" required />
              <Select
                name="vehicleType"
                label={t('booking_type')}
                options={[
                  { value: 'atv', label: 'Квадроцикл' },
                  { value: 'buggy', label: 'Багги' },
                  { value: 'snowmobile', label: 'Снегоход' },
                  { value: 'jetski', label: 'Водный мотоцикл' },
                ]}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="startDate" label={t('booking_start')} type="date" required />
                <Input name="endDate" label={t('booking_end')} type="date" required />
              </div>
              <Textarea name="message" label={t('booking_message')} placeholder={t('booking_message')} />
              <Button type="submit" size="lg" className="w-full">{t('booking_submit')}</Button>
            </form>
          )}
        </Card>
      </ScrollReveal>
    </div>
  );
}
