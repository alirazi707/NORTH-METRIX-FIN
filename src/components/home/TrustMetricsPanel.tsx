import { Shield, Award, CheckCircle, TrendingUp } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { CountUp } from "@/components/ui/CountUp";

const metrics = [
  {
    icon: Shield,
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
    decimals: 1,
  },
  {
    icon: Award,
    value: 4.8,
    suffix: "/5",
    label: "Customer Rating",
    description: "Based on 2,400+ reviews",
    decimals: 1,
  },
  {
    icon: TrendingUp,
    value: 340,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Fortune 500 companies",
  },
  {
    icon: CheckCircle,
    value: 50,
    suffix: "M+",
    label: "Data Points Daily",
    description: "Real-time processing",
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "ISO 27001", status: "Certified" },
  { name: "HIPAA", status: "Ready" },
];

export function TrustMetricsPanel() {
  return (
    <section className="py-24 relative text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />
      {/* Top Blend Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="container-max section-padding relative z-10">
        <MotionWrapper>
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-white/80 uppercase tracking-widest">
              Trust & Compliance
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white mt-4 tracking-tight">
              Enterprise-Grade Security & Performance
            </h2>
          </div>
        </MotionWrapper>

        {/* Metrics Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="text-center p-8 h-full rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 group hover:-translate-y-3">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                  <metric.icon className="w-7 h-7 text-white/50 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUp
                    value={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                    start={metric.value * 0.5} // Start from 50% of the value for all metrics
                  />
                </div>
                <p className="text-lg font-medium text-white mb-2">{metric.label}</p>
                <p className="text-sm text-white/50 leading-relaxed font-light">{metric.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications Bar */}
        <MotionWrapper delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-transparent border border-white/10 hover:border-white/50 transition-colors duration-300"
              >
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/70">{cert.name}</span>
                <span className="text-xs text-white font-bold uppercase tracking-wider">{cert.status}</span>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
