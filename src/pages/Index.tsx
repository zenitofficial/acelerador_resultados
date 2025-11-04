import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { OfferSection } from "@/components/OfferSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
