import { motion } from "framer-motion";

const brands = [
    { name: "Google Cloud", code: "GC" },
    { name: "AWS", code: "AWS" },
    { name: "Salesforce", code: "SF" },
    { name: "Oracle", code: "OR" },
    { name: "Microsoft", code: "MS" },
    { name: "IBM", code: "IBM" },
    { name: "SAP", code: "SAP" },
    { name: "Adobe", code: "AD" },
];

// Duplicate the brands array to create a seamless loop
const allBrands = [...brands, ...brands, ...brands, ...brands];

export function TrustedBySection() {
    return (
        <section className="py-12 bg-background border-b border-border/50 overflow-hidden">
            <div className="container-max mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks for smooth fade in/out */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex items-center gap-16 md:gap-24 flex-shrink-0"
                    animate={{
                        x: ["0%", "-25%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {allBrands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="flex items-center justify-center min-w-[100px]"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-primary/50 transition-colors duration-300 cursor-default select-none">
                                {brand.code}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
