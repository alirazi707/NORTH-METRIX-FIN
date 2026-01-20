import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg"; // Updated logo path
import { motion } from "framer-motion";
import { ServicesMenu } from "./ServicesMenu";

const navigation = [
  { name: "Platform", href: "/platform" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Remove location dependency as window scroll is global

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || servicesOpen
        ? "bg-black/30 backdrop-blur-2xl backdrop-saturate-200 border-b border-white/10 py-4 shadow-xl"
        : "bg-transparent py-6"
        }`}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <nav className="container-max section-padding relative z-50">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <img
              src={logo}
              alt="NorthMetriX"
              className="h-16 w-auto transition-all duration-300 filter invert brightness-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(!!item.hasDropdown)}
                onClick={() => setServicesOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 relative group flex items-center gap-1 ${isActive(item.href) || (item.hasDropdown && servicesOpen)
                    ? "text-white" // Active state
                    : "text-white/60 hover:text-white" // Inactive state
                    }`}
                >
                  {item.name}
                  <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transform transition-transform duration-300 origin-left ${isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero-outline" size="sm" asChild className="hidden xl:flex">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in h-screen">
            <div className="section-padding py-12 flex flex-col gap-8 items-center justify-center h-full">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-light tracking-wider uppercase transition-colors ${isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
                <Button variant="hero-outline" size="lg" asChild className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Services Dropdown Menu */}
      <ServicesMenu isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
    </header>
  );
}
