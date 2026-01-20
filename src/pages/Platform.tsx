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
    icon: TrendingUp,
    title: "Growth Signals & Metrics",
    description: "Identify which actions and strategies build sustainable, trusted growth. Move beyond vanity metrics to signals that matter.",
    highlights: ["Leading indicators", "Growth attribution", "Predictive insights", "Custom KPIs"],
  },
];

const metrics = [
  { icon: BarChart3, label: "Trust Score", value: "Track overall brand credibility" },
  { icon: LineChart, label: "Traction Index", value: "Measure user momentum" },
  { icon: PieChart, label: "Growth Health", value: "Assess sustainable growth" },
];

const Platform = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden text-white snap-start">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A4133C]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-medium text-white">Platform</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
                Growth Intelligence Platform
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/70 font-light mb-8">
                A unified platform for measuring, understanding, and accelerating business growth through reputation analytics, user traction, and intelligent metrics.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90">
                <Link to="/contact">
                  Request Access
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Metrics */}
      <section className="py-16 bg-background border-b border-border snap-start">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <metric.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{metric.label}</h3>
                  <p className="text-sm text-muted-foreground">{metric.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background snap-start">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Three Pillars of Growth Intelligence
            </h2>
            <p className="text-lg text-muted-foreground">
              Integrated capabilities that work together to give you complete visibility.
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-muted border border-border flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-soft-gray mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-soft-gray/70 mb-8">
            Schedule a demo to explore how NorthMetriX can transform your growth strategy.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule Demo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
