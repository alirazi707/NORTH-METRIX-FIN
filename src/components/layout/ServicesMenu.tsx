import { serviceCategories } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface ServicesMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ServicesMenu({ isOpen, onClose }: ServicesMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -20, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 text-white shadow-2xl overflow-hidden"
                    onMouseLeave={onClose}
                >
                    <div className="container-max section-padding py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {serviceCategories.map((category) => (
                                <div key={category.title} className="group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <category.icon className="w-6 h-6 text-white" />
                                        <h3 className="text-lg font-medium text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.services.map((service) => (
                                            <li key={service}>
                                                <Link
                                                    to="/services"
                                                    className="text-sm text-white/50 hover:text-white transition-colors block py-1"
                                                    onClick={onClose}
                                                >
                                                    {service}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                            <Link to="/services" onClick={onClose} className="text-sm font-medium text-white hover:text-white/80 flex items-center gap-2">
                                View All Services &rarr;
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
