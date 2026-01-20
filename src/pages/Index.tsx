import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { TrustMetricsPanel } from "@/components/home/TrustMetricsPanel";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { WhySection } from "@/components/home/WhySection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";
import { ScrollLogoAnimation } from "@/components/home/ScrollLogoAnimation";
import { StarBackground } from "@/components/ui/StarBackground";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      <ScrollLogoAnimation onComplete={handleAnimationComplete} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <Layout>
          <StarBackground />
          <HeroSection />
          <TrustMetricsPanel />
          <ProblemSection />
          <ServicesSection />
          <ApproachSection />
          <WhySection />
          <InsightsSection />
          <CTASection />
          {/* <TrustedBySection /> - Optional, keeping it out for pure minimalism for now unless requested */}
        </Layout>
      </motion.div>
    </>
  );
};



export default Index;