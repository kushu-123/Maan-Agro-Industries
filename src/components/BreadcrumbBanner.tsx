import { Link } from "react-router-dom";

const BreadcrumbBanner = () => (
  <section className="bg-primary py-4">
    <div className="container flex items-center gap-2 text-primary-foreground flex-wrap">
      <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
      <span className="opacity-60">/</span>
      <Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Products</Link>
      <span className="opacity-60">/</span>
      <span className="font-heading font-bold text-sm uppercase">MAAN 913 – Crop Master</span>
    </div>
  </section>
);

export default BreadcrumbBanner;
