import maanCombine from "@/assets/maan-combine.png";
import maanReeper from "@/assets/maan-reeper.png";
import maanDiscPlough from "@/assets/maan-disc-plough.png";
import maanBaler from "@/assets/maan-baler.png";
import maanSuperseeder from "@/assets/maan-superseeder.png";
import maanRotavator from "@/assets/maan-rotavator.png";

const products = [
  {
    title: "MAAN 913 Combine Harvester",
    description:
      "Self-propelled multicrop combine harvester with powerful engine, advanced threshing drum, and wide cutter bar for efficient harvesting of wheat, paddy, soybean & more.",
    image: maanCombine,
  },
  {
    title: "MAAN 913 Reeper",
    description:
      "High-performance crop reaper with advanced cutting mechanism, designed for efficient harvesting of wheat, rice, and other crops with minimal grain loss.",
    image: maanReeper,
  },
  {
    title: "MAAN 913 Reversible Disc Plough",
    description:
      "Heavy-duty reversible disc plough for deep soil turning and land preparation. Ideal for tough, hard, and stony soils with hydraulic reversing system.",
    image: maanDiscPlough,
  },
  {
    title: "MAAN 913 Baler",
    description:
      "Robust round baler for efficient straw and hay baling. Features automatic twine tying, high-density bale formation, and low maintenance chain drive.",
    image: maanBaler,
  },
  {
    title: "MAAN 913 Super Seeder",
    description:
      "Seed & fertilizer combo machine for zero-tillage sowing. Ensures precise seed placement and uniform germination with integrated rotavator and seed drill.",
    image: maanSuperseeder,
  },
  {
    title: "MAAN 913 Rotavator",
    description:
      "Multi-speed rotary tiller for seedbed preparation and stubble management. Heavy-duty gearbox with hardened blades for superior soil pulverization.",
    image: maanRotavator,
  },
];

const ProductCategories = () => (
  <section id="our-products" className="py-16 bg-muted/50">
    <div className="container">
      <h2 className="font-heading text-3xl font-bold text-primary text-center mb-4 uppercase">
        Our Products
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Explore our complete range of agricultural machinery — engineered for performance, built for Indian farms.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow group text-center overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden bg-background flex items-center justify-center p-4">
              <img
                src={p.image}
                alt={p.title}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold text-primary mb-2 uppercase">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCategories;
