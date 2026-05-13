import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactAdvisorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      {/* Subtle radial glow behind card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[700px] h-[400px] rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto w-[90%] max-w-5xl">
        {/* ── Outer Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[28px] bg-[#f5f5f7] px-8 py-12 md:px-16 md:py-16"
          style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 32px 80px rgba(0,0,0,0.35)" }}
        >

          {/* Top content row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

            {/* Left: heading + body */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="max-w-md"
            >
              {/* Eyebrow */}
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
                Expert Guidance
              </p>

              {/* Heading */}
              <h2
                className="mb-5 font-semibold text-black"
                style={{
                  fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Talk to a<br />growth advisor.
              </h2>

              {/* Body */}
              <p
                className="font-light leading-relaxed text-black/55"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}
              >
                Our specialists are available&nbsp;24/7 to help identify the
                right technology and growth solutions for your business.
              </p>
            </motion.div>

            {/* Right: phone CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease, delay: 0.18 }}
              className="flex flex-col items-start md:items-end gap-3 md:pt-2"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
                Call us directly
              </p>

              <a
                href="tel:+919207777229"
                className="group flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-white hover:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
              >
                {/* Phone icon */}
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-50">
                  <Phone className="h-4 w-4 text-blue-600" />
                </span>

                {/* Number */}
                <span
                  className="font-semibold tracking-tight text-blue-600 transition-colors group-hover:text-blue-700"
                  style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)" }}
                >
                  +91&nbsp;92077&nbsp;77229
                </span>
              </a>

              <a
                href="mailto:info@northmetrix.com"
                className="text-[13px] font-light text-black/40 underline-offset-4 transition-colors hover:text-blue-600 hover:underline"
              >
                info@northmetrix.com
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.1, ease, delay: 0.28 }}
            style={{ transformOrigin: "left" }}
            className="my-10 h-px bg-black/8"
          />

          {/* ── Consultation Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease, delay: 0.34 }}
          >
            <Link
              to="/contact"
              className="group flex items-center justify-between gap-6 rounded-[18px] border border-black/[0.07] bg-[#eef1f8] px-7 py-6 transition-all duration-300 hover:border-blue-500/20 hover:bg-[#e8edf8] hover:shadow-[0_8px_40px_rgba(59,130,246,0.10)]"
            >
              {/* Icon + text */}
              <div className="flex items-center gap-5">
                {/* Headset icon */}
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-500/15 bg-white shadow-sm">
                  <Headphones className="h-5 w-5 text-blue-600" />
                </span>

                <div>
                  <p
                    className="font-semibold text-black"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)", letterSpacing: "-0.02em" }}
                  >
                    Request a consultation
                  </p>
                  <p className="mt-0.5 text-[13px] font-light text-black/50">
                    Book a free 30-min strategy call with a North MetriX advisor.
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-50 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4 text-black/50 transition-colors group-hover:text-blue-600" />
              </span>
            </Link>
          </motion.div>

          {/* Bottom trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {[
              "No commitment required",
              "Response within 24 hours",
              "Serving businesses worldwide",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-[12px] font-light text-black/40"
              >
                <span className="h-1 w-1 rounded-full bg-black/25" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
