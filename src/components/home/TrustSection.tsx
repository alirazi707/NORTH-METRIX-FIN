import { Shield, Lock, CheckCircle } from "lucide-react";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const trustPoints = [
  {
    icon: Shield,
    title: "Transparent Practices",
    description: "Clear methodologies, open about how we collect and process data.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Enterprise-grade security measures to protect your business data.",
  },
  {
    icon: CheckCircle,
    title: "Ethical Policies",
    description: "Real users, real reviews, real metrics. No artificial inflation.",
  },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <MotionWrapper className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 border border-border mb-6">
              <span className="text-sm font-medium text-soft-gray">Trust & Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
              Built on Trust
            </h2>
            <p className="text-lg text-soft-gray">
              Our commitment to transparency, security, and ethical practices.
            </p>
          </MotionWrapper>

          {/* Trust Points */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-off-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}