import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="py-24 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#1e1b4b] to-[#0f172a]" />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
                Ready to transform your <br />
                <span className="text-white">digital reality?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-white/60 font-light mb-8 max-w-lg">
                Let's discuss how NorthMetriX can help you measure, build, and scale your business with intelligence.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-none">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild className="border-white/20 text-white hover:bg-white hover:text-black rounded-none">
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}