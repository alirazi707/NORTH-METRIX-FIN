import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, CheckCircle, FileText, ArrowRight, FileCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StarBackground } from "@/components/ui/StarBackground";

const principles = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We are clear about our methodologies, how we collect data, and how we generate insights. No black boxes.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Enterprise-grade security measures protect your business data at every level of our platform.",
  },
  {
    icon: Eye,
    title: "Ethical Practices",
    description: "Real users, real reviews, real metrics. We never support or enable artificial growth tactics.",
  },
];

const Trust = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section - With Star Background */}
      <section className="h-screen w-full bg-black relative flex items-center justify-center overflow-hidden snap-start">
        <StarBackground />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

        <div className="relative container-max section-padding z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90 tracking-wide">Trust & Compliance</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Built on <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Trust</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/60 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Our commitment to transparency, security, and ethical practices is foundational to everything we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-32 bg-[#050505] snap-start">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Principles</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/50">
                The standards that guide how we build, operate, and serve our clients.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={0.1 * index}>
                <div
                  className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/5">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-32 bg-black snap-start">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Transparent Policies
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-white/60 leading-relaxed mb-8">
                  We believe in plain language and clear terms. Our policies are designed to protect you, not confuse you.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  {[
                    { name: "Privacy Policy", href: "/privacy", icon: FileCheck },
                    { name: "Terms of Service", href: "/terms", icon: Shield },
                  ].map((item) => (
                    <Link key={item.name} to={item.href} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
                      <div className="flex items-center gap-4">
                        <item.icon className="w-5 h-5 text-white/80" />
                        <span className="font-medium text-white">{item.name}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Security Overview
                </h3>
                <ul className="space-y-4">
                  {["TLS 1.3 Encryption", "24/7 Monitoring", "Regular Audits", "Data Backups", "Access Controls"].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-white/80">
                      <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trust;
