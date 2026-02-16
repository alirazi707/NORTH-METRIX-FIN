import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StarBackground } from "@/components/ui/StarBackground";
import { Reveal } from "@/components/ui/Reveal";

const NotFound = () => {
  return (
    <Layout enableSnap={true}>
      <section className="h-screen w-full bg-transparent relative flex items-center justify-center overflow-hidden snap-start">
        <StarBackground />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

        <div className="relative container-max section-padding z-10 text-center">
          <Reveal>
            <h1 className="text-[12rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 select-none">
              404
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 -mt-12 relative z-10">
              Page Not Found
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl text-white/60 mb-10 max-w-md mx-auto font-light leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12">
                <Link to="/">Go Home</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
