import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StarBackground } from "@/components/ui/StarBackground";

const features = [
  {
    title: "Reputation Intelligence",
    description: "Aggregate reviews, ratings, and trust signals from multiple platforms. Get a unified view of your brand perception with sentiment analysis and trend detection.",
    highlights: ["Multi-platform aggregation", "Sentiment analysis", "Competitive benchmarking", "Alert systems"],
  },
  {
    title: "User & Traction Analytics",
    description: "Track real user behavior, activation patterns, and engagement metrics. Understand what drives genuine growth and identify friction points.",
    highlights: ["User journey mapping", "Activation tracking", "Cohort analysis", "Retention metrics"],
  },
  {
    title: "Growth Signals & Metrics",
    description: "Identify which actions and strategies build sustainable, trusted growth. Move beyond vanity metrics to signals that matter.",
    highlights: ["Leading indicators", "Growth attribution", "Predictive insights", "Custom KPIs"],
  },
];

const Platform = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section - 100vh with Stars */}
      <section className="h-screen w-full bg-black relative flex items-center justify-center overflow-hidden snap-start">
        <StarBackground />

        {/* Subtle dark gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

        <div className="relative container-max section-padding z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90 tracking-wide">Growth Intelligence Platform</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Elevate Your <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Standards</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/60 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              A unified system for measuring, understanding, and accelerating business growth through intelligent signal processing.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-lg">
              <Link to="/contact">
                Request Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Pillars Section - Premium Gradient Background */}
      <section className="min-h-screen py-40 relative flex items-center snap-start">
        {/* Premium Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />

        <div className="relative container-max section-padding z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
                Three Pillars of <br /><span className="font-semibold">Growth Intelligence</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/60 font-light">
                Our architecture is built upon three foundational layers designed to provide complete visibility and control.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={0.1 + index * 0.1} overflow="visible" className="h-full">
                {/* Premium Card - No Icon, No Image Placeholder */}
                <div className="h-full group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col hover:-translate-y-3">
                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 mb-8 leading-relaxed font-light">
                    {feature.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <ul className="space-y-3">
                      {feature.highlights.map((item) => (
                        <li key={item} className="text-sm text-white/50 flex items-center gap-2 group-hover:text-white/80 transition-colors">
                          <span className="w-1 h-1 rounded-full bg-white/40" />
                          {item}
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

      {/* CTA - Kept consistent but simplified */}
      <section className="py-32 bg-black snap-start flex items-center justify-center">
        <div className="container-max section-padding text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to transform?
            </h2>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-16 text-lg">
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
