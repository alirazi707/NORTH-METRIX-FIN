import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Audit & Strategy",
        description: "Deep dive into your current infrastructure and growth bottlenecks.",
        icon: Search,
    },
    {
        id: 2,
        title: "Design & Build",
        description: "Architecting custom AI-driven systems and scalable platforms.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "Launch & Scale",
        description: "Deploying production-ready solutions and activating growth channels.",
        icon: Rocket,
    },
    {
        id: 4,
        title: "Measure & Optimize",
        description: "Continuous refinement based on real-time data and performance metrics.",
        icon: BarChart3,
    },
];

export function ApproachSection() {
    return (
        <section className="py-24 relative text-white overflow-hidden bg-transparent">

            <div className="container-max section-padding relative z-10">
                {/* Header */}
                <div className="mb-20 text-center">
                    <Reveal>
                        <h2 className="text-4xl sm:text-6xl font-thin mb-6 tracking-tight">
                            Our <span className="text-white/50">Approach.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                            We don't just deliver services; we build systems. Our process is collaborative, data-driven, and focused on long-term value creation.
                        </p>
                    </Reveal>
                </div>

                {/* Desktop Flowchart (Horizontal) */}
                <div className="hidden lg:flex items-start justify-between relative px-10">
                    {/* Connecting Line */}
                    <div className="absolute top-12 left-0 w-full h-[2px] bg-white/10 z-0">
                        <motion.div
                            className="h-full bg-white origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="relative z-10 w-64 text-center">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.3, duration: 0.5, type: "spring" }}
                                className="w-24 h-24 mx-auto rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center mb-8 relative group hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
                            >
                                <div className="absolute inset-2 rounded-full border border-white/5 group-hover:border-white/10 transition-colors" />
                                <step.icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                                    {step.id}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: (index * 0.3) + 0.2, duration: 0.5 }}
                            >
                                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Mobile Flowchart (Vertical) */}
                <div className="lg:hidden space-y-12 relative pl-8">
                    {/* Vertical Line */}
                    <div className="absolute top-0 left-12 w-[2px] h-full bg-white/10 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 pl-12"
                        >
                            <div className="absolute left-0 top-0 w-24 h-24 -ml-12 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center group hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
                                <step.icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" />
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                                    {step.id}
                                </div>
                            </div>
                            <div className="pt-2">
                                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
