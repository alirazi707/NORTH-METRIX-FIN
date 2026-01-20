import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

const insights = [
  {
    type: "Article",
    icon: FileText,
    title: "Understanding Trust Metrics in the Digital Age",
    excerpt: "How businesses can quantify and improve their reputation across platforms.",
    coming: false,
  },
  {
    type: "Case Study",
    icon: BookOpen,
    title: "From Noise to Clarity: A SaaS Growth Story",
    excerpt: "How one startup used data-driven metrics to scale from 1K to 50K users.",
    coming: true,
  },
  {
    type: "Insight",
    icon: TrendingUp,
    title: "The Future of Reputation Analytics",
    excerpt: "Emerging trends in how businesses measure and build trust with customers.",
    coming: true,
  },
];

export function InsightsSection() {
  return (
    <section className="py-24 relative text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <h2 className="text-3xl sm:text-5xl font-light text-white mb-4">
                Latest Insights
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-white/60 font-light max-w-xl">
                Articles, case studies, and insights about growth, trust, and metrics.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Button variant="outline" size="sm" asChild className="self-start md:self-auto rounded-none border-white/20 text-white hover:bg-white hover:text-black">
              <Link to="/insights">
                VIEW ALL
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Reveal key={insight.title} delay={0.1 * index}>
              <div className="group relative p-8 h-full rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col justify-between hover:-translate-y-3">

                <div>
                  {/* Type Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                      {insight.type}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light mb-8">
                    {insight.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                {!insight.coming && (
                  <Link
                    to="/insights"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-all duration-300 uppercase tracking-widest"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                {insight.coming && (
                  <span className="text-sm text-white/30 uppercase tracking-widest">Coming Soon</span>
                )}

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}