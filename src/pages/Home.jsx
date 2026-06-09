import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import MarqueeStrip from '../components/landing/MarqueeStrip';
import StatsStrip from '../components/landing/StatsStrip';
import HowItWorks from '../components/landing/HowItWorks';
import FeaturesSection from '../components/landing/FeaturesSection';
import DashboardPreview from '../components/landing/DashboardPreview';
import EngineMatrix from '../components/landing/EngineMatrix';
import FixOptimize from '../components/landing/FixOptimize';
import EEATSection from '../components/landing/EEATSection';
import EvidenceSection from '../components/landing/EvidenceSection';
import PricingSection from '../components/landing/PricingSection';
import FAQSection from '../components/landing/FAQSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <StatsStrip />
      <HowItWorks />
      <div className="h-px bg-border mx-6 md:mx-14" />
      <FeaturesSection />
      <DashboardPreview />
      <div className="h-px bg-border mx-6 md:mx-14" />
      <EngineMatrix />
      <div className="h-px bg-border mx-6 md:mx-14" />
      <FixOptimize />
      <div className="h-px bg-border mx-6 md:mx-14" />
      <EEATSection />
      <div className="h-px bg-border mx-6 md:mx-14" />
      <EvidenceSection />
      <div className="h-px bg-border mx-6 md:mx-14" />
      <PricingSection />
      <div className="h-px bg-border mx-6 md:mx-14" />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}