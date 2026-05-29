import { Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-sm py-2">
    <div className="container flex justify-between items-center">
      <span className="text-xs opacity-80 hidden md:inline">
        MAAN AGRO INDUSTRIES PVT. LTD.
      </span>
      <div className="flex items-center gap-6">
        <a
          href="tel:+919878989953"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Call / WhatsApp:</span> +91 98789 89953
        </a>
        <a
          href="mailto:bhogalcombinemaan913@gmail.com"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <Mail className="w-3.5 h-3.5" />
          bhogalcombinemaan913@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
