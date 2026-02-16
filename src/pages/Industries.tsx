import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import { StarBackground } from "@/components/ui/StarBackground";

const industries = [
  {
    title: "SaaS & Tech Platforms",
    description: "Scale your product with autonomous AI agents and automated engineering workflows. We help startups and scale-ups build future-ready SaaS infrastructure.",
    outcomes: ["Autonomous system integration", "Rapid product iteration", "Reduced operational costs", "Enhanced user activation"],
  },
  {
    title: "Finance & FinTech",
    description: "Leverage AI-powered risk intelligence and fraud detection systems to protect assets and build regulatory trust.",
    outcomes: ["Real-time fraud prevention", "Automated compliance audits", "Predictive risk modelling", "Enterprise-grade security"],
  },
  {
    title: "Retail & E-commerce",
    description: "Automate marketplace management and use AI-driven marketing systems to dominate platforms like Amazon, Flipkart, and beyond.",
    outcomes: ["Automated catalog sync", "AI-optimized ad performance", "Increased marketplace ROI", "Data-driven growth strategy"],
  },
  {
    title: "Hospitality & Venues",
    description: "Streamline operations with autonomous booking systems for hotels, auditoriums, and turf venues with integrated AI assistants.",
    outcomes: ["24/7 autonomous booking", "AI-powered guest support", "Optimized venue occupancy", "Automated revenue management"],
  },
  {
    title: "Healthcare & Wellness",
    description: "Deploy secure, AI-enabled patient management and appointment platforms that optimize clinic workflows and patient care.",
    outcomes: ["Optimized scheduling systems", "Secure digital health records", "Enhanced patient experience", "Streamlined clinic operations"],
  },
  {
    title: "Logistics & Delivery",
    description: "Implement AI-driven route optimization and delivery management systems to reduce costs and improve service speed.",
    outcomes: ["AI-optimized routing", "Real-time delivery intelligence", "Reduced fuel and labor costs", "Improved fleet efficiency"],
  },
];

const Industries = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section - 100vh with Stars */}
      <section className="h-screen w-full bg-transparent relative flex items-center justify-center overflow-hidden snap-start">
        <StarBackground />

        {/* Subtle dark gradient overlay for depth - REMOVED for pure black */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" /> */}

        <div className="relative container-max section-padding z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90 tracking-wide">Industries</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Sector-Specific <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/60 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover how NorthMetriX delivers value and clarity to your specific industry through tailored digital intelligence.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-lg">
              <Link to="/contact">
                Contact Specialist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="min-h-screen py-40 relative flex items-center snap-start bg-transparent">
        {/* Premium Soft Gradient Background - REMOVED */}

        {/* Top Blend Gradient - REMOVED */}


        <div className="relative container-max section-padding z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
                Tailored for <br /><span className="font-semibold">Impact</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/60 font-light">
                Proven strategies and systems optimized for the unique challenges of your sector.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={0.1 + index * 0.1} overflow="visible" className="h-full">
                {/* Premium Card Layout - No Images/Icons */}
                <div className="h-full group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col hover:-translate-y-3">
                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
                      SECTOR 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-white/60 mb-8 leading-relaxed font-light">
                    {industry.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Outcomes</h4>
                    <ul className="space-y-3">
                      {industry.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm text-white/50 flex items-start gap-2 group-hover:text-white/80 transition-colors">
                          <span className="w-1 h-1 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-transparent snap-start flex items-center justify-center">
        <div className="container-max section-padding text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-8">
              Your Sector, Optimized
            </h2>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-16 text-lg">
              <Link to="/contact">Contact Industry Specialist</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
