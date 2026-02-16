import { Reveal } from "@/components/ui/Reveal";
import { serviceCategories } from "@/data/services";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-transparent">

      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <Reveal>
            <h2 className="text-4xl sm:text-6xl font-thin text-white mb-6 tracking-tight">
              Our <span className="text-white/50">Services.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="h-[1px] w-full bg-white/10 mb-8" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
              Comprehensive digital growth systems designed for scale.
            </p>
          </Reveal>
        </div>

        {/* Services Grid - Headings Only */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.title} delay={0.1 * index} className="w-full md:w-[calc(50%-3rem)] lg:w-[calc(33.33%-3rem)]">
              <Link
                to={`/services#${category.id}`}
                className="block group h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Category Header */}
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors duration-500">
                    <category.icon
                      className="w-8 h-8 text-white group-hover:text-white transition-all duration-300 stroke-[1]"
                    />
                  </div>
                  <h3 className="text-2xl font-light text-white group-hover:text-white/90 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}