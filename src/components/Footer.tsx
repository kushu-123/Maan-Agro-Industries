import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-10">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-heading text-xl font-bold mb-3">MAAN AGRO INDUSTRIES</h4>
        <p className="text-sm opacity-70 leading-relaxed">
          Leading manufacturer of agricultural machinery including combine harvesters, tractors, balers and implements. Serving farmers worldwide since 2015.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg font-bold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
          <li><Link to="/products" className="hover:opacity-100 transition-opacity">Our Products</Link></li>
          <li><Link to="/products/maan-913" className="hover:opacity-100 transition-opacity">MAAN 913 Combine</Link></li>
          <li><Link to="/application-form" className="hover:opacity-100 transition-opacity">Enquiry Form</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg font-bold mb-3">Contact Us</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bhoglan, Tehsil-Rajpura, Patiala, Punjab, India</li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><a href="tel:+919878989953" className="hover:opacity-100 transition-opacity">+91 98789 89953</a></li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><a href="mailto:bhogalcombinemaan913@gmail.com" className="hover:opacity-100 transition-opacity">bhogalcombinemaan913@gmail.com</a></li>
          <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /><a href="https://wa.me/919878989953" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Chat on WhatsApp</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-50">
© 2026 Maan Agro Industries. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
