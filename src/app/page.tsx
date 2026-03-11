"use client";

import { useTheme } from "@/hooks/useTheme";
import PathSelector from "@/components/PathSelector";
import PageContent from "@/components/PageContent";
import Hero from "@/components/Hero";
import StickyBar from "@/components/StickyBar";
import VossBlock from "@/components/VossBlock";
import GuiltRelease from "@/components/GuiltRelease";
import FacilitiesGallery from "@/components/FacilitiesGallery";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import HowItWorks from "@/components/HowItWorks";
import PricingTable from "@/components/PricingTable";
import SavingsCalculator from "@/components/SavingsCalculator";
import ComparisonTable from "@/components/ComparisonTable";
import SocialProof from "@/components/SocialProof";
import RiskReversal from "@/components/RiskReversal";
import CheckoutForm from "@/components/CheckoutForm";
import NotificationQueue from "@/components/NotificationQueue";
import ExitIntent from "@/components/ExitIntent";
import SpotsCounter from "@/components/SpotsCounter";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  const { hasChosen } = useTheme();

  if (!hasChosen) {
    return <PathSelector />;
  }

  return (
    <>
      <StickyBar />
      <PageContent>
        <Hero />
        <SpotsCounter />
        <VossBlock />
        <GuiltRelease />
        <FacilitiesGallery />
        <VideoSection />
        <Testimonials />
        <SocialProof />
        <HowItWorks />
        <PricingTable />
        <SavingsCalculator />
        <ComparisonTable />
        <RiskReversal />
        <CheckoutForm />
        <Footer />
      </PageContent>

      {/* Overlays */}
      <NotificationQueue />
      <ExitIntent />
      <AccessibilityWidget />
      <CookieConsent />
    </>
  );
}
