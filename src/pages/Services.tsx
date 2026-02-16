import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { StarBackground } from "@/components/ui/StarBackground";
import { useEffect as useReactEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section - 100vh with Stars */}
      <section className="h-screen w-full bg-transparent relative flex items-center justify-center overflow-hidden snap-start">
        <StarBackground />

        {/* Subtle dark gradient overlay for depth - REMOVED */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" /> */}

        <div className="relative container-max section-padding z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90 tracking-wide">Services</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Digital Enablement & <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Growth</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/60 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Beyond analytics, we execute your digital presence through comprehensive platform development and marketing systems.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-lg">
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="min-h-screen py-40 relative flex items-center snap-start bg-transparent" id="services-grid">
        {/* Premium Soft Gradient Background - REMOVED */}

        {/* Top Blend Gradient - REMOVED */}


        <div className="relative container-max section-padding z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
                Comprehensive <br /><span className="font-semibold">Service Ecosystem</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/60 font-light">
                Tailored solutions designed to build, optimize, and scale your digital infrastructure.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <Reveal key={category.title} delay={0.1 + index * 0.1} overflow="visible" className="h-full">
                {/* Premium Card Layout */}
                <div className="h-full group p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col hover:-translate-y-3">
                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
                      CATEGORY {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-6 group-hover:text-white/90 transition-colors">
                    {category.title}
                  </h3>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {category.services.map((service) => (
                        <li key={service} className="text-base text-white/60 flex items-start gap-3 group-hover:text-white/90 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                          {service}
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

      <section className="py-32 bg-transparent snap-start flex items-center justify-center">
        <div className="container-max section-padding text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to build?
            </h2>
            <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-16 text-lg">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

const ServicesWrapper = () => {
  const { hash } = useLocation();

  useReactEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return <Services />;
};

export default ServicesWrapper;
