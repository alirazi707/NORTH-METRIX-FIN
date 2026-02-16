import { Home, Briefcase, Building2, FileText, Info, Mail } from 'lucide-react';
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { Layout } from "@/components/layout/Layout";
import { StarBackground } from "@/components/ui/StarBackground";
import { Reveal } from "@/components/ui/Reveal";

const Demo = () => {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Platform', url: '/platform', icon: FileText },
        { name: 'Services', url: '/services', icon: Briefcase },
        { name: 'Industries', url: '/industries', icon: Building2 },
        { name: 'About', url: '/about', icon: Info },
        { name: 'Contact', url: '/contact', icon: Mail }
    ];

    return (
        <Layout enableSnap={true}>
            <section className="h-screen w-full bg-transparent relative flex items-center justify-center overflow-hidden snap-start">
                <StarBackground />

                <div className="relative container-max section-padding z-10 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <span className="text-sm font-medium text-white/90 tracking-wide">Component Demo</span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
                            Tubelight <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Navbar</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-xl sm:text-2xl text-white/60 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                            An animated navigation component with a glowing tubelight effect that follows the active tab.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl mx-auto text-left">
                            <h2 className="text-2xl font-semibold text-white mb-6">Features</h2>
                            <ul className="space-y-4">
                                {[
                                    "Smooth spring animations via framer-motion",
                                    "Responsive design with icons on mobile, text on desktop",
                                    "Glowing tubelight effect follows active navigation item",
                                    "Fully integrated with React Router"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-white/60 font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                {/* Navbar Demo Instance */}
                <div className="absolute bottom-10 left-0 right-0 z-50 flex justify-center">
                    <TubelightNavbar items={navItems} />
                </div>
            </section>
        </Layout>
    );
};

export default Demo;
