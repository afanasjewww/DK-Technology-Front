'use client';

import { useTranslations } from 'next-intl';
import { Bike, Tag, ClipboardList, Settings, CheckCircle, type LucideIcon } from 'lucide-react';
import { Badge, Button, Input, Container } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/motion';

const steps: { key: string; icon: LucideIcon }[] = [
  { key: 'step1', icon: Bike },
  { key: 'step2', icon: Tag },
  { key: 'step3', icon: ClipboardList },
  { key: 'step4', icon: Settings },
  { key: 'step5', icon: CheckCircle },
];

export function ConfiguratorPlaceholder() {
  const t = useTranslations('configurator');

  return (
    <section className="section-padding">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">{t('coming_soon')}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dk-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-dk-gray-500 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {steps.map((step, i) => (
            <StaggerItem key={step.key}>
              <div className="p-6 rounded-2xl bg-dk-gray-50 border border-dk-gray-100 text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-dk-yellow-500 text-dk-gray-950 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-3 text-dk-gray-500 dark:text-dk-gray-400" strokeWidth={1.5} />
                <p className="text-sm font-medium text-dk-gray-700">{t(step.key)}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal delay={0.3}>
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-dk-gray-900 mb-4">{t('notify')}</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex gap-2"
            >
              <Input
                name="email"
                type="email"
                placeholder={t('notify_placeholder')}
                className="flex-grow"
              />
              <Button type="submit">{t('notify_submit')}</Button>
            </form>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
