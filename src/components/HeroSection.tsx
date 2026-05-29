import heroImg from "@/assets/maan-913-angle.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative h-[500px] md:h-[550px] overflow-hidden">
    <img
      src={heroImg}
      alt="MAAN AGRO combine harvester in wheat field"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    <div className="relative container h-full flex items-center">
      <div className="max-w-lg animate-fade-in-up">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-3">
          MAI 987 STELLAR
        </h1>
        <p className="text-secondary font-heading text-lg mb-1">
          New Design Concept &amp; Advanced Features
        </p>
        <p className="text-primary-foreground/80 text-sm mb-6">
          The legend in all new look to serve Farmers Worldwide.
        </p>
        <Button
          variant="outline"
          className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 uppercase tracking-wider font-semibold"
        >
          View Details
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
