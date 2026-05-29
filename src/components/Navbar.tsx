import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import maanLogo from "@/assets/maan-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Our Products", to: "/products" },
  { label: "Enquiry Form", to: "/application-form" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={maanLogo}
            alt="MAAN Agro Industries logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
          <div className="leading-tight hidden sm:block">
            <span className="font-heading font-bold text-xl text-primary block">
              MAAN AGRO
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Industries
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-body text-sm font-semibold px-4 py-2 rounded transition-colors uppercase tracking-wide ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary-foreground hover:bg-primary"
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>

        <span className="hidden lg:inline-flex text-xs font-bold uppercase tracking-wider text-primary italic">
          BHOGAL COMBINE SPARE PARTS
        </span>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border pb-4">
          <ul className="container flex flex-col gap-1 pt-3">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`block font-body text-sm font-semibold px-3 py-2 rounded transition-colors uppercase tracking-wide ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <span className="block font-body text-sm font-bold text-primary text-center uppercase tracking-wide mt-2 italic">
                BHOGAL COMBINE SPARE PARTS
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
