'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
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
          <div className="p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-200 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg hover:shadow-dk-yellow-500/10 transition-all text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-dk-yellow-500" strokeWidth={1.5} />
            <h3 className="font-bold text-dk-gray-900 dark:text-white mb-1">{t('address')}</h3>
            <p className="text-sm text-dk-gray-500 dark:text-dk-gray-400">{t('address_value')}</p>
          </div>
          <div className="p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-200 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg hover:shadow-dk-yellow-500/10 transition-all text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-dk-yellow-500" strokeWidth={1.5} />
            <h3 className="font-bold text-dk-gray-900 dark:text-white mb-1">{t('phone')}</h3>
            <a href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, '')}`} className="text-sm text-dk-yellow-500 hover:text-dk-yellow-400 transition-colors block">
              {CONTACT_INFO.phone}
            </a>
            <a href="tel:+79312881088" className="text-sm text-dk-yellow-500 hover:text-dk-yellow-400 transition-colors block">
              +7 (931) 288-10-88
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-200 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg hover:shadow-dk-yellow-500/10 transition-all text-center">
            <Mail className="w-8 h-8 mx-auto mb-3 text-dk-yellow-500" strokeWidth={1.5} />
            <h3 className="font-bold text-dk-gray-900 dark:text-white mb-1">{t('email')}</h3>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-dk-yellow-500 hover:text-dk-yellow-400 transition-colors block">
              {CONTACT_INFO.email}
            </a>
            <a href="mailto:sales@dk-tehno.ru" className="text-sm text-dk-yellow-500 hover:text-dk-yellow-400 transition-colors block">
              sales@dk-tehno.ru
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-dk-gray-50 dark:bg-dk-gray-900 border border-dk-gray-200 dark:border-dk-gray-800 hover:border-dk-yellow-500 hover:shadow-lg hover:shadow-dk-yellow-500/10 transition-all text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-dk-yellow-500" strokeWidth={1.5} />
            <h3 className="font-bold text-dk-gray-900 dark:text-white mb-1">{t('hours')}</h3>
            <p className="text-sm text-dk-gray-500 dark:text-dk-gray-400">{t('hours_value')}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Contact Form */}
      <ScrollReveal delay={0.2}>
        <Card className="max-w-2xl mx-auto p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-dk-gray-900 dark:text-white mb-6">{t('form_title')}</h3>
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-dk-yellow-500" strokeWidth={1.5} />
              <p className="text-lg text-dk-gray-700 dark:text-dk-gray-300">{t('form_success')}</p>
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
