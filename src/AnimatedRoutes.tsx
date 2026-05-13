import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import Trust from "./pages/Trust";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Demo from "./pages/Demo";
import ScrollDemo from "./pages/ScrollDemo";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Index /></PageTransition>} />
                <Route path="/platform" element={<PageTransition><Platform /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
                <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
                <Route path="/trust" element={<PageTransition><Trust /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                <Route path="/demo" element={<PageTransition><Demo /></PageTransition>} />
                <Route path="/scroll-demo" element={<PageTransition><ScrollDemo /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
