import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/ui/Reveal";
import { StarBackground } from "@/components/ui/StarBackground";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@northmetrix.ai",
    href: "mailto:contact@northmetrix.ai",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: MapPin,
    title: "Global",
    value: "Serving businesses worldwide",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout enableSnap={true}>
      {/* Hero / Form Section - Single Page Feel */}
      <section className="min-h-screen w-full bg-black relative flex items-center justify-center overflow-hidden snap-start py-32">
        <StarBackground />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

        <div className="relative container-max section-padding z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-start">

            {/* Left Column: Content */}
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                  <span className="text-sm font-medium text-white/90 tracking-wide">Contact</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-5xl sm:text-6xl font-light text-white mb-6">
                  Let's <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Talk</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl text-white/60 font-light mb-12 max-w-lg leading-relaxed">
                  Whether you have questions about our platform, need a consultation, or want to discuss a project, we're here to help.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1 group-hover:text-blue-200 transition-colors">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white/60">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Glass Form */}
            <Reveal delay={0.2} width="100%">
              <div className="p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <h2 className="text-2xl font-bold text-white mb-8 relative z-10">
                  Send Message
                </h2>

                {isSubmitted ? (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Message Sent
                    </h3>
                    <p className="text-white/60">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/80">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-0 transition-all rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/80">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-0 transition-all rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/80">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-0 transition-all rounded-xl h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white/80">Service Type *</Label>
                      <Select required>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-white/30 focus:ring-0 transition-all rounded-xl h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111] border-white/10 text-white">
                          <SelectItem value="ai-automation">AI & Automation Systems</SelectItem>
                          <SelectItem value="ai-marketing">AI-Driven Marketing</SelectItem>
                          <SelectItem value="video-ads">AI Video Ads & Brand Films</SelectItem>
                          <SelectItem value="web-platform">Website / Platform Development</SelectItem>
                          <SelectItem value="erp-systems">ERP & Internal Systems</SelectItem>
                          <SelectItem value="ai-governance">AI Governance & Security</SelectItem>
                          <SelectItem value="consulting">Consulting & Strategy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/80">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your needs..."
                        rows={5}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-0 transition-all rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12 font-medium text-base transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
