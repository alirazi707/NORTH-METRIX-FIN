import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg"; // Updated logo path

const footerLinks = {
  platform: [
    { name: "Overview", href: "/platform" },
    { name: "Reputation Intelligence", href: "/platform#reputation" },
    { name: "Traction Analytics", href: "/platform#traction" },
    { name: "Growth Signals", href: "/platform#growth" },
  ],
  services: [
    { name: "Web Development", href: "/services#web" },
    { name: "Marketplace Enablement", href: "/services#marketplace" },
    { name: "Marketing Systems", href: "/services#marketing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Intelligence Center", href: "/insights" },
    { name: "Trust & Compliance", href: "/trust" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white border-t border-white/10">
      <div className="container-max section-padding py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <Link to="/" className="inline-block mb-8">
                <img src={logo} alt="NorthMetriX" className="h-10 w-auto invert brightness-0" />
              </Link>
              <h3 className="text-2xl font-light leading-snug max-w-sm text-white/90 mb-8">
                Growth intelligence and reputation analytics for businesses that value clarity.
              </h3>
            </div>

            <div className="hidden lg:block">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} NorthMetriX.<br />All rights reserved.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4">
            {/* Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6 opacity-60">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm font-light block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:hidden mt-8 border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm text-center">
              © {new Date().getFullYear()} NorthMetriX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
