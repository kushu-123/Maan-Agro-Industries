import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import maanCombine from "@/assets/maan-combine.png";
import maanReeper from "@/assets/maan-reeper.png";
import maanDiscPlough from "@/assets/maan-disc-plough.png";
import maanBaler from "@/assets/maan-baler.png";
import maanSuperseeder from "@/assets/maan-superseeder.png";
import maanRotavator from "@/assets/maan-rotavator.png";

const products = [
  { slug: "maan-913", title: "MAAN 913 Combine Harvester", description: "Self-propelled multicrop combine harvester with powerful engine, advanced threshing drum, and wide cutter bar.", image: maanCombine, detailPath: "/products/maan-913" },
  { slug: "reeper", title: "MAAN 913 Reeper", description: "High-performance crop reaper with advanced cutting mechanism for efficient harvesting with minimal grain loss.", image: maanReeper, detailPath: "/products/reeper" },
  { slug: "disc-plough", title: "MAAN 913 Reversible Disc Plough", description: "Heavy-duty reversible disc plough for deep soil turning. Ideal for tough, hard, and stony soils.", image: maanDiscPlough, detailPath: "/products/disc-plough" },
  { slug: "baler", title: "MAAN 913 Baler", description: "Robust round baler with automatic twine tying, high-density bale formation and low maintenance.", image: maanBaler, detailPath: "/products/baler" },
  { slug: "super-seeder", title: "MAAN 913 Super Seeder", description: "Seed & fertilizer combo for zero-tillage sowing with integrated rotavator and seed drill.", image: maanSuperseeder, detailPath: "/products/super-seeder" },
  { slug: "rotavator", title: "MAAN 913 Rotavator", description: "Multi-speed rotary tiller with hardened blades for superior soil pulverization.", image: maanRotavator, detailPath: "/products/rotavator" },
];

const Products = () => (
  <Layout>
    <section className="bg-primary py-12">
      <div className="container text-center text-primary-foreground">
        <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-2">Our Products</h1>
        <p className="opacity-80 max-w-2xl mx-auto">Explore our complete range of agricultural machinery — engineered for performance, built for Indian farms.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.title} className="bg-card rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group text-center overflow-hidden border border-border">
              <div className="aspect-[4/3] overflow-hidden bg-background flex items-center justify-center p-4">
                <img src={p.image} alt={p.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-primary mb-2 uppercase">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Link to={p.detailPath}>
                    <Button size="sm" variant="outline" className="uppercase tracking-wider text-xs font-bold">View Details</Button>
                  </Link>
                  <Link to={`/application-form?product=${encodeURIComponent(p.title)}`}>
                    <Button size="sm" className="bg-primary uppercase tracking-wider text-xs font-bold">Enquire</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;
