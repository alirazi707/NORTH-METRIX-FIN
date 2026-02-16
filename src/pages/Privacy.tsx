import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { StarBackground } from "@/components/ui/StarBackground";

const Privacy = () => {
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
              Privacy <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Policy</span>
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
                <h2 className="text-3xl font-light text-white mb-6">1. Introduction</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  NorthMetriX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">2. Information We Collect</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light mb-6">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="space-y-4">
                  {["Contact information (name, email, phone number)", "Company information (business name, industry)", "Account credentials", "Communications you send to us", "Business data you choose to analyze through our platform"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/60 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">3. How We Use Your Information</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light mb-6">
                  We use the information we collect to:
                </p>
                <ul className="space-y-4">
                  {["Provide, maintain, and improve our services", "Process transactions and send related information", "Respond to your inquiries and provide customer support", "Send you technical notices and updates", "Analyze usage patterns to improve our platform"].map((item) => (
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
                <h2 className="text-3xl font-light text-white mb-6">4. Data Security</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">5. Data Retention</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">6. Your Rights</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light mb-6">
                  Depending on your location, you may have certain rights regarding your personal data, including:
                </p>
                <ul className="space-y-4">
                  {["The right to access your personal data", "The right to correct inaccurate data", "The right to delete your data", "The right to data portability", "The right to withdraw consent"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/60 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div>
                <h2 className="text-3xl font-light text-white mb-6">7. Contact Us</h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
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

export default Privacy;
