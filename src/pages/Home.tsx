import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Award, Truck, Users, ShieldCheck, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/maan-913-angle.jpg";
import maanCombine from "@/assets/maan-combine.png";
import maanReeper from "@/assets/maan-reeper.png";
import maanBaler from "@/assets/maan-baler.png";
import maanRotavator from "@/assets/maan-rotavator.png";

const highlights = [
  { icon: Award, title: "Trusted Quality", text: "Engineered to deliver consistent performance season after season." },
  { icon: Wrench, title: "Built to Last", text: "Heavy-duty construction with premium components for low maintenance." },
  { icon: Truck, title: "Pan-India Service", text: "Reliable after-sales support and spare parts availability nationwide." },
  { icon: Users, title: "Farmer First", text: "Designed in close collaboration with farmers for real field needs." },
  { icon: ShieldCheck, title: "Proven Reliability", text: "Backed by rigorous testing across diverse crops and terrains." },
  { icon: Leaf, title: "Multicrop Ready", text: "Versatile machinery for wheat, paddy, soybean, mustard and more." },
];

const featured = [
  { title: "MAAN 913 Combine Harvester", image: maanCombine },
  { title: "MAAN 913 Reeper", image: maanReeper },
  { title: "MAAN 913 Baler", image: maanBaler },
  { title: "MAAN 913 Rotavator", image: maanRotavator },
];

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[520px] md:h-[600px] overflow-hidden">
      <img src={heroImg} alt="MAAN AGRO combine harvester in wheat field" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
      <div className="relative container h-full flex items-center">
        <div className="max-w-xl">
          <span className="inline-block bg-secondary text-secondary-foreground font-heading uppercase tracking-widest text-xs px-3 py-1 rounded mb-4">
            Since 2015
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4 uppercase">
            Powering India's Farms With Precision Machinery
          </h1>
          <p className="text-primary-foreground/90 text-base md:text-lg mb-8 leading-relaxed">
            MAAN Agro Industries manufactures combine harvesters, balers, rotavators and a complete range of farm implements built for the Indian farmer.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/application-form">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 uppercase tracking-wider font-bold">
                Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 uppercase tracking-wider font-semibold">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 bg-background">
      <div className="container max-w-4xl text-center">
        <span className="text-secondary font-heading uppercase tracking-widest text-sm">Welcome to MAAN AGRO</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-5 uppercase">
          Engineering The Future of Indian Agriculture
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          From our manufacturing facility in Bhoglan, Tehsil-Rajpura, Patiala, we design and build robust agricultural machinery trusted by thousands of farmers. Every MAAN machine reflects a decade of field-tested engineering, dependable performance and an uncompromising commitment to value.
        </p>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-muted/40">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-secondary font-heading uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 uppercase">
            Strength You Can Count On
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 uppercase">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products preview */}
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <span className="text-secondary font-heading uppercase tracking-widest text-sm">Featured</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 uppercase">Our Products</h2>
          </div>
          <Link to="/products" className="text-primary font-heading uppercase tracking-wider text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <Link key={p.title} to="/products" className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-all">
              <div className="aspect-square bg-background flex items-center justify-center p-4">
                <img src={p.image} alt={p.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 border-t border-border text-center">
                <h3 className="font-heading text-sm font-bold text-primary uppercase">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-primary">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground uppercase mb-1">
            Ready to upgrade your farm?
          </h2>
          <p className="text-primary-foreground/80">Send us an enquiry and our team will reach out with the right machine for your needs.</p>
        </div>
        <Link to="/application-form">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 uppercase tracking-wider font-bold">
            Place an Order
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Home;
