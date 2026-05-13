import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "At North MetriX, we believe",
  "intelligence should drive growth,",
  "technology should create clarity,",
  "and innovation should create",
  "meaningful impact.",
];

// Each line occupies 1/N of the total scroll range.
// Within that range it fades + unblurs + rises from dim → bright.
function ManifestoLine({
  text,
  index,
  total,
  containerRef,
}: {
  text: string;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const seg = 1 / total;
  const inStart  = index * seg;
  const inEnd    = inStart + seg * 0.55; // reveal completes in first 55% of its segment

  const opacity   = useTransform(scrollYProgress, [inStart, inEnd], [0.08, 1]);
  const blurPx    = useTransform(scrollYProgress, [inStart, inEnd], [14, 0]);
  const yPx       = useTransform(scrollYProgress, [inStart, inEnd], [52, 0]);
  const filterVal = useTransform(blurPx, (v) => `blur(${v.toFixed(2)}px)`);

  return (
    <motion.span
      style={{ opacity, y: yPx, filter: filterVal, display: "block" }}
      className="will-change-transform"
    >
      {text}
    </motion.span>
  );
}

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const total = lines.length;

  return (
    // Section is N×100 vh tall so the sticky panel persists long enough
    // for each line to animate individually as you scroll.
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${total * 100}vh` }}
    >
      {/* ── Sticky viewport panel ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-transparent">

        {/* Hairline rules */}
        <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08]" />

        <div className="container-max section-padding w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-light uppercase tracking-[0.34em] text-white/30 mb-14"
          >
            Our Philosophy
          </motion.p>

          {/* Oversized manifesto — each line self-animates */}
          <p
            className="font-extralight text-white select-none"
            style={{
              fontSize: "clamp(2rem, 5.4vw, 5.6rem)",
              letterSpacing: "-0.026em",
              lineHeight: 1.14,
            }}
            aria-label={lines.join(" ")}
          >
            {lines.map((line, i) => (
              <ManifestoLine
                key={i}
                text={line}
                index={i}
                total={total}
                containerRef={sectionRef}
              />
            ))}
          </p>

          {/* Sweep rule — appears after all lines reveal */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ transformOrigin: "left" }}
            className="mt-20 h-px bg-white/10"
          />
        </div>
      </div>
    </section>
  );
}


