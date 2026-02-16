import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { StarBackground } from "@/components/ui/StarBackground";

const Terms = () => {
  return (
    <Layout enableSnap={true}>
      {/* Hero Section - 100vh with Stars */}
      <section className="h-screen w-full bg-transparent relative flex items-center justify-center overflow-hidden snap-start">
        <StarBackground />

        <div className="relative container-max section-padding z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90 tracking-wide">Legal</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Terms of <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Service</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/60 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Last updated: December 2024
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 relative bg-transparent snap-start">

        <div className="relative container-max section-padding z-10 max-w-4xl mx-auto">
          <div className="space-y-16">
            <Reveal>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  By accessing or using NorthMetriX's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">2. Description of Services</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  NorthMetriX provides growth intelligence and reputation analytics services, as well as digital enablement and growth services including web development, marketplace enablement, and marketing systems.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">3. User Responsibilities</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light mb-6">
                  As a user of our services, you agree to:
                </p>
                <ul className="space-y-4">
                  {["Provide accurate and complete information", "Maintain the security of your account credentials", "Use our services only for lawful purposes", "Not attempt to interfere with the proper functioning of our services", "Comply with all applicable laws and regulations"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/60 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">4. Intellectual Property</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by NorthMetriX and are protected by intellectual property laws.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">5. Data and Privacy</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your data as described in our Privacy Policy.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">6. Limitation of Liability</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  To the maximum extent permitted by law, NorthMetriX shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">7. Termination</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  We may terminate or suspend your access to our services at any time, without prior notice or liability, for any reason, including if you breach these Terms of Service.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">8. Changes to Terms</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on our website.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">9. Contact</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:contact@northmetrix.ai" className="text-white hover:underline transition-all">
                    contact@northmetrix.ai
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
