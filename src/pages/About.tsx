import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Users, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-big-white.svg";
import { Reveal } from "@/components/ui/Reveal";
import { StarBackground } from "@/components/ui/StarBackground";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description: "We believe insights should be actionable, not overwhelming. Every metric we surface is designed to drive decisions.",
  },
  {
    icon: Lightbulb,
    title: "Integrity First",
    description: "We never support shortcuts or artificial growth. Real businesses need real metrics to make real progress.",
  },
  {
    icon: Users,
    title: "Global Mindset",
    description: "Built to serve businesses everywhere, from local enterprises to global companies, with the same level of precision.",
  },
];

const About = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section - With Star Background & Floating Logo */}
      <section className="min-h-screen w-full bg-black relative flex items-center justify-center overflow-hidden snap-start">
        <StarBackground />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

        <div className="relative container-max section-padding z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                  <span className="text-sm font-medium text-white/90 tracking-wide">About Us</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
                  The Story Behind <br /> <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">NorthMetriX</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl text-white/60 font-light mb-10 max-w-xl leading-relaxed">
                  We started with a simple question: Why is it so hard for businesses to measure what truly matters for growth?
                </p>
              </Reveal>
            </div>

            {/* Floating Logo */}
            <div className="flex justify-center lg:justify-end">
              <Reveal delay={0.3}>
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10" />
                  <img src={logo} alt="NorthMetriX" className="w-64 sm:w-80 h-auto object-contain invert brightness-0 opacity-90" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section (First) - Premium Gradient */}
      <section className="min-h-[80vh] py-32 relative flex items-center snap-start">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />

        <div className="relative container-max section-padding z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl sm:text-5xl font-light text-white mb-8">
                  Our Vision
                </h2>
                <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                  <p>
                    We envision a world where every business, regardless of size or industry, has access to the same quality of growth intelligence that was once reserved for large enterprises.
                  </p>
                  <p>
                    A world where growth is measured honestly, trust is built authentically, and businesses compete on the strength of their value, not the depth of their pockets.
                  </p>
                  <p className="text-white">
                    NorthMetriX is building the infrastructure to make that vision a reality.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <blockquote className="text-2xl text-white font-light leading-relaxed relative z-10 italic">
                  "The future belongs to businesses that can see clearly through the noise and act on what truly matters."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-white/20" />
                  <p className="text-white/40 text-sm tracking-widest uppercase">— NorthMetriX Team</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission Section (Second) - Unified Gradient */}
      <section className="py-32 relative snap-start">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />

        <div className="container-max section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-light text-white mb-8">
                Our Mission
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl sm:text-2xl text-white/60 font-light leading-relaxed mb-12">
                To help businesses measure, build, and scale trust, user traction, and performance using real data and intelligent metrics. We believe growth should be <span className="text-white">transparent, ethical, and sustainable</span>.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-lg font-medium text-white tracking-wide">Measure What Matters</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section (Third) - Unified Gradient */}
      <section className="py-32 relative snap-start">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />

        <div className="container-max section-padding relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/50">
                The principles that guide everything we build and every decision we make.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={0.1 + index * 0.1} overflow="visible" className="h-full">
                <div
                  className="h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-colors">
                    <value.icon className="w-7 h-7 text-white/80 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                    {value.description}
                  </p>
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
              Join Us on This Journey
            </h2>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-16 text-lg">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
