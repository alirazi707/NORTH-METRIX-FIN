import { AlertTriangle, Eye, TrendingDown } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const problems = [
  {
    icon: TrendingDown,
    title: "Unreliable Growth Metrics",
    description: "Businesses struggle to trust their own data, making decisions based on incomplete or misleading signals.",
  },
  {
    icon: Eye,
    title: "Fragmented Reputation",
    description: "Reviews and trust signals are scattered across platforms, creating noise instead of clarity.",
  },
  {
    icon: AlertTriangle,
    title: "No Unified View",
    description: "There is no clear way to measure trust, traction, and credibility together in one place.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-32 relative text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]" />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <MotionWrapper className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-light mb-6 tracking-tight">
            Growth Without Clarity Is <span className="text-white">Risky.</span>
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Most businesses operate on assumptions. NorthMetriX brings precision.
          </p>
        </MotionWrapper>

        {/* Problem Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group relative p-10 h-full rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-3">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-600 transition-colors duration-500">
                  <problem.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-200 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {problem.description}
                </p>

                {/* Decorative Corner Removed */}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}