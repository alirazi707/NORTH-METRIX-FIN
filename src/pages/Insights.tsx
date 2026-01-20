import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import { StarBackground } from "@/components/ui/StarBackground";

const insights = [
  {
    type: "Article",
    title: "Understanding Trust Metrics in the Digital Age",
    excerpt: "How businesses can quantify and improve their reputation across platforms. A comprehensive guide to measuring what truly matters.",
    date: "Coming Soon",
    readTime: "8 min read",
  },
  {
    type: "Case Study",
    title: "From Noise to Clarity: A SaaS Growth Story",
    excerpt: "How one startup used data-driven metrics to scale from 1,000 to 50,000 users while maintaining trust and quality.",
    date: "Coming Soon",
    readTime: "12 min read",
  },
  {
    type: "Insight",
    title: "The Future of Reputation Analytics",
    excerpt: "Emerging trends in how businesses measure and build trust with customers. What to expect in the next five years.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    type: "Article",
    title: "Growth Without Vanity: Metrics That Matter",
    excerpt: "Moving beyond surface-level numbers to understand the signals that predict sustainable business growth.",
    date: "Coming Soon",
    readTime: "10 min read",
  },
  {
    type: "Guide",
    title: "Building Your First Trust Dashboard",
    excerpt: "A step-by-step guide to creating a unified view of your business reputation and growth metrics.",
    date: "Coming Soon",
    readTime: "15 min read",
  },
  {
    type: "Insight",
    title: "Why Ethical Growth Wins Long-Term",
    excerpt: "The data behind sustainable business practices and why authenticity outperforms shortcuts.",
    date: "Coming Soon",
    readTime: "7 min read",
  },
];

const Insights = () => {
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
              <span className="text-sm font-medium text-white/90 tracking-wide">Intelligence Center</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Insights & <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Resources</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/60 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Practical knowledge, case studies, and insights for data-driven leaders building the future of growth.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-lg">
              <Link to="/contact">
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Insights Grid Section */}
      <section className="min-h-screen py-40 relative flex items-center snap-start">
        {/* Premium Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />

        <div className="relative container-max section-padding z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
                Latest <br /><span className="font-semibold">Perspectives</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/60 font-light">
                Deep dives into the mechanics of reputation, traction, and sustainable scaling.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {insights.map((post, index) => (
              <Reveal key={post.title} delay={0.1 + index * 0.1} overflow="visible" className="h-full">
                {/* Premium Card Layout - Clean text */}
                <div className="h-full group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col hover:-translate-y-3">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-200">
                      {post.type}
                    </span>
                    <span className="text-xs text-white/40">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 mb-8 leading-relaxed font-light">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-sm text-white/40">{post.date}</span>
                    <span className="text-sm font-medium text-white group-hover:underline">Read Article</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black snap-start flex items-center justify-center">
        <div className="container-max section-padding text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-8">
              Stay Informed
            </h2>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-16 text-lg">
              <Link to="/contact">Join Newsletter</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
