'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Textarea, Card } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';
import { CONTACT_INFO } from '@/lib';

export function ContactsContent() {
  const t = useTranslations('contacts');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      await fetch('/api/contact', {
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
      {/* Contact Info */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-bold text-dk-gray-900 mb-1">{t('address')}</h3>
            <p className="text-sm text-dk-gray-500">{CONTACT_INFO.address}</p>
          </div>
          <div className="p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 text-center">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-bold text-dk-gray-900 mb-1">{t('phone')}</h3>
            <a href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, '')}`} className="text-sm text-dk-red-500 hover:text-dk-red-600 transition-colors">
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 text-center">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="font-bold text-dk-gray-900 mb-1">{t('email')}</h3>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-dk-red-500 hover:text-dk-red-600 transition-colors">
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 text-center">
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="font-bold text-dk-gray-900 mb-1">{t('hours')}</h3>
            <p className="text-sm text-dk-gray-500">{CONTACT_INFO.workingHours}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Contact Form */}
      <ScrollReveal delay={0.2}>
        <Card className="max-w-2xl mx-auto p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-dk-gray-900 mb-6">{t('form_title')}</h3>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg text-dk-gray-700">{t('form_success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="name" label={t('form_name')} placeholder={t('form_name')} required />
                <Input name="phone" label={t('form_phone')} placeholder="+7 (___) ___-__-__" required />
              </div>
              <Input name="email" label={t('form_email')} type="email" placeholder="email@example.com" required />
              <Input name="subject" label={t('form_subject')} placeholder={t('form_subject')} required />
              <Textarea name="message" label={t('form_message')} placeholder={t('form_message')} required />
              <Button type="submit" size="lg" className="w-full">{t('form_submit')}</Button>
            </form>
          )}
        </Card>
      </ScrollReveal>
    </div>
  );
}
