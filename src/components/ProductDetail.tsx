import { useState } from "react";
import maanSide from "@/assets/maan-913-side.jpg";
import maanAngle from "@/assets/maan-913-angle.jpg";
import maanFront from "@/assets/maan-913-front.jpg";

const images = [maanSide, maanAngle, maanFront];

const quickSpecs = [
  { label: "Model", value: "MAAN 913 Crop Master" },
  { label: "Category", value: "Combine Harvester" },
  { label: "Type", value: "Straw Walker" },
  { label: "Cutter Bar", value: "14 Feet" },
  { label: "No. of Straw Walkers", value: "5 (Five)" },
  { label: "Engine", value: "Ashok Leyland / Kirloskar" },
  { label: "Harvesting", value: "Multicrop" },
  { label: "Steering", value: "Power Steering" },
];

const ProductDetail = () => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section className="py-10 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div>
            <div className="border border-border rounded-lg overflow-hidden bg-muted mb-4">
              <img
                src={images[activeImg]}
                alt="MAAN 913 Combine Harvester"
                className="w-full h-[350px] md:h-[420px] object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`border-2 rounded-md overflow-hidden w-20 h-16 md:w-24 md:h-20 transition-all ${
                    activeImg === i
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`MAAN 913 view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Specs */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
              MAAN 913 - CROP MASTER
            </h1>
            <p className="text-muted-foreground font-heading text-lg mb-6">
              Self Propelled Combine Harvester
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-0">
              {quickSpecs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between py-3 border-b border-border"
                >
                  <span className="font-semibold text-sm text-foreground">
                    {s.label}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
