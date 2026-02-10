import { setRequestLocale } from 'next-intl/server';
import { HeroSection, CategoryShowcase, FeaturedVehicles, WhyChooseUs, PromoBanner, PartnersSection } from '@/components/home';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <CategoryShowcase />
      <FeaturedVehicles />
      <WhyChooseUs />
      <PromoBanner />
      <PartnersSection />
    </>
  );
}
