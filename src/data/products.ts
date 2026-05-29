import maanReeper from "@/assets/maan-reeper.png";
import maanDiscPlough from "@/assets/maan-disc-plough.png";
import maanBaler from "@/assets/maan-baler.png";
import maanSuperseeder from "@/assets/maan-superseeder.png";
import maanRotavator from "@/assets/maan-rotavator.png";

export type SpecRow = { label: string; value: string };
export type ProductInfo = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  intro: string;
  quickSpecs: SpecRow[];
  features: string[];
  technical: { heading: string; rows: SpecRow[] }[];
};

export const productCatalog: Record<string, ProductInfo> = {
  reeper: {
    slug: "reeper",
    title: "MAAN 913 Reeper",
    subtitle: "Self Propelled Multicrop Reaper",
    image: maanReeper,
    intro:
      "The MAAN 913 Reeper is a self-propelled crop reaper engineered for fast, low-loss harvesting of wheat, paddy and similar standing crops. Its precision cutting system, lightweight chassis and easy manoeuvrability make it ideal for small and medium farm holdings.",
    quickSpecs: [
      { label: "Model", value: "MAAN 913 Reeper" },
      { label: "Category", value: "Reaper / Windrower" },
      { label: "Cutting Width", value: "1200 mm (4 Feet)" },
      { label: "Engine", value: "Diesel, 7 HP (Single Cylinder)" },
      { label: "Fuel Tank", value: "5 Litres" },
      { label: "Transmission", value: "3 Forward + 1 Reverse" },
      { label: "Crop Suitability", value: "Wheat, Paddy, Mustard, Barley" },
      { label: "Weight", value: "210 kg (Approx.)" },
    ],
    features: [
      "Low fuel consumption diesel engine",
      "Adjustable cutting height",
      "Sharp serrated cutter blades",
      "Lightweight & easy to operate",
      "Smooth windrow placement for easy collection",
      "Reduced grain loss during cutting",
      "Ideal for small and marginal farms",
      "Minimal maintenance, long-lasting build",
    ],
    technical: [
      {
        heading: "General",
        rows: [
          { label: "Manufacturer", value: "MAAN Agro Industries" },
          { label: "Model", value: "MAAN 913 Reeper" },
          { label: "Type", value: "Self Propelled Reaper" },
        ],
      },
      {
        heading: "Engine",
        rows: [
          { label: "Type", value: "4 Stroke Diesel, Single Cylinder" },
          { label: "Power", value: "7 HP" },
          { label: "Cooling", value: "Air Cooled" },
          { label: "Starting", value: "Hand Crank" },
        ],
      },
      {
        heading: "Cutting System",
        rows: [
          { label: "Cutting Width", value: "1200 mm" },
          { label: "Cutting Height", value: "30 – 150 mm (Adjustable)" },
          { label: "Blade Type", value: "Serrated Steel" },
        ],
      },
      {
        heading: "Transmission",
        rows: [
          { label: "Gears", value: "3 Forward + 1 Reverse" },
          { label: "Clutch", value: "Dry, Single Plate" },
        ],
      },
    ],
  },
  "disc-plough": {
    slug: "disc-plough",
    title: "MAAN 913 Reversible Disc Plough",
    subtitle: "Heavy Duty Hydraulic Reversible Plough",
    image: maanDiscPlough,
    intro:
      "Built to tackle the toughest soils, the MAAN 913 Reversible Disc Plough delivers deep, clean ploughing in a single pass. Its hydraulic reversing mechanism enables continuous one-way ploughing — perfect for hard, dry or stony fields.",
    quickSpecs: [
      { label: "Model", value: "MAAN 913 RDP" },
      { label: "Category", value: "Tillage Implement" },
      { label: "No. of Discs", value: "2 / 3 Bottom" },
      { label: "Disc Diameter", value: "660 mm (26\")" },
      { label: "Working Depth", value: "Up to 300 mm" },
      { label: "Tractor Required", value: "45 – 75 HP" },
      { label: "Linkage", value: "Cat-II, 3-Point Hitch" },
      { label: "Operation", value: "Hydraulic Reversible" },
    ],
    features: [
      "Heavy-duty boron steel discs",
      "Hydraulic reversing for continuous ploughing",
      "Suitable for hard, stony & sticky soils",
      "Reduced soil compaction",
      "Robust box-section frame for long life",
      "Greasable sealed bearings",
      "Adjustable disc angle for soil type",
      "Low draft, low fuel consumption",
    ],
    technical: [
      {
        heading: "General",
        rows: [
          { label: "Manufacturer", value: "MAAN Agro Industries" },
          { label: "Model", value: "MAAN 913 RDP" },
          { label: "Type", value: "Mounted Hydraulic Reversible" },
        ],
      },
      {
        heading: "Construction",
        rows: [
          { label: "Frame", value: "Heavy Duty Box Section" },
          { label: "Disc Material", value: "Boron Steel" },
          { label: "Disc Diameter", value: "660 mm" },
          { label: "Disc Thickness", value: "8 mm" },
        ],
      },
      {
        heading: "Performance",
        rows: [
          { label: "Working Width", value: "600 – 900 mm" },
          { label: "Working Depth", value: "Up to 300 mm" },
          { label: "Field Capacity", value: "0.3 – 0.4 ha/hr" },
        ],
      },
    ],
  },
  baler: {
    slug: "baler",
    title: "MAAN 913 Baler",
    subtitle: "Automatic Round Straw Baler",
    image: maanBaler,
    intro:
      "The MAAN 913 Baler converts loose straw and crop residue into compact, easy-to-handle round bales. Engineered with an automatic twine-tying mechanism and high-density bale chamber, it reduces stubble burning and helps farmers earn extra income from crop residue.",
    quickSpecs: [
      { label: "Model", value: "MAAN 913 Baler" },
      { label: "Category", value: "Round Baler" },
      { label: "Bale Size", value: "Ø 600 mm × 700 mm" },
      { label: "Bale Weight", value: "18 – 25 kg" },
      { label: "Pickup Width", value: "1400 mm" },
      { label: "Tractor Required", value: "35 HP & Above" },
      { label: "PTO Speed", value: "540 RPM" },
      { label: "Tying", value: "Automatic Twine Tying" },
    ],
    features: [
      "Automatic twine tying mechanism",
      "High-density uniform bale formation",
      "Compatible with standard 35+ HP tractors",
      "Reduces stubble burning",
      "Low maintenance gear & chain drive",
      "Heavy-duty pickup tines",
      "Smooth bale ejection",
      "Suitable for wheat, paddy and grass straw",
    ],
    technical: [
      {
        heading: "General",
        rows: [
          { label: "Manufacturer", value: "MAAN Agro Industries" },
          { label: "Model", value: "MAAN 913 Baler" },
          { label: "Type", value: "Tractor Mounted Round Baler" },
        ],
      },
      {
        heading: "Bale Chamber",
        rows: [
          { label: "Bale Diameter", value: "600 mm" },
          { label: "Bale Length", value: "700 mm" },
          { label: "Bale Density", value: "High" },
          { label: "Tying", value: "Automatic, Twine" },
        ],
      },
      {
        heading: "Operation",
        rows: [
          { label: "Pickup Width", value: "1400 mm" },
          { label: "PTO Speed", value: "540 RPM" },
          { label: "Tractor HP", value: "35 HP & Above" },
          { label: "Output", value: "60 – 80 Bales / hour" },
        ],
      },
    ],
  },
  "super-seeder": {
    slug: "super-seeder",
    title: "MAAN 913 Super Seeder",
    subtitle: "Zero-Tillage Seed & Fertilizer Drill",
    image: maanSuperseeder,
    intro:
      "The MAAN 913 Super Seeder combines rotavator and seed drill into a single, fuel-efficient pass. It chops standing stubble, mixes it into the soil and sows seed with fertilizer in one operation — eliminating the need for stubble burning.",
    quickSpecs: [
      { label: "Model", value: "MAAN 913 Super Seeder" },
      { label: "Category", value: "Combo Seed Drill" },
      { label: "Working Width", value: "2100 mm (7 Feet)" },
      { label: "No. of Tynes", value: "9" },
      { label: "Row Spacing", value: "225 mm" },
      { label: "Tractor Required", value: "50 HP & Above" },
      { label: "PTO Speed", value: "540 RPM" },
      { label: "Seed Box", value: "Twin Box (Seed + Fertilizer)" },
    ],
    features: [
      "Single pass sowing in standing stubble",
      "Eliminates stubble burning",
      "Adjustable seed & fertilizer rate",
      "Heavy-duty hardened rotavator blades",
      "Strong gearbox with side chain drive",
      "Improves soil organic matter",
      "Fuel & time efficient",
      "Compatible with paddy & wheat residue",
    ],
    technical: [
      {
        heading: "General",
        rows: [
          { label: "Manufacturer", value: "MAAN Agro Industries" },
          { label: "Model", value: "MAAN 913 Super Seeder" },
          { label: "Type", value: "Tractor Mounted Combo Drill" },
        ],
      },
      {
        heading: "Construction",
        rows: [
          { label: "Frame", value: "Heavy Duty Welded" },
          { label: "Blades", value: "Hardened Steel, L-Type" },
          { label: "No. of Blades", value: "42" },
        ],
      },
      {
        heading: "Operation",
        rows: [
          { label: "Working Width", value: "2100 mm" },
          { label: "Working Depth", value: "Up to 150 mm" },
          { label: "Seed Metering", value: "Fluted Roller" },
          { label: "Output", value: "0.3 – 0.4 ha/hr" },
        ],
      },
    ],
  },
  rotavator: {
    slug: "rotavator",
    title: "MAAN 913 Rotavator",
    subtitle: "Multi-Speed Rotary Tiller",
    image: maanRotavator,
    intro:
      "The MAAN 913 Rotavator is a multi-speed rotary tiller designed for fine seedbed preparation in a single pass. Its hardened blades and reliable gearbox deliver superior soil pulverization and mixing across a wide range of soil conditions.",
    quickSpecs: [
      { label: "Model", value: "MAAN 913 Rotavator" },
      { label: "Category", value: "Rotary Tiller" },
      { label: "Working Width", value: "1800 mm (6 Feet)" },
      { label: "No. of Blades", value: "42 (L-Type)" },
      { label: "Working Depth", value: "Up to 150 mm" },
      { label: "Tractor Required", value: "40 HP & Above" },
      { label: "PTO Speed", value: "540 RPM" },
      { label: "Linkage", value: "Cat-II, 3-Point Hitch" },
    ],
    features: [
      "Hardened L-type blades for long life",
      "Multi-speed gearbox",
      "Side chain drive for reliable power transfer",
      "Adjustable working depth",
      "Fine soil pulverization in single pass",
      "Heavy-duty welded chassis",
      "Low maintenance & easy serviceability",
      "Suitable for all major soil types",
    ],
    technical: [
      {
        heading: "General",
        rows: [
          { label: "Manufacturer", value: "MAAN Agro Industries" },
          { label: "Model", value: "MAAN 913 Rotavator" },
          { label: "Type", value: "Tractor Mounted Rotary Tiller" },
        ],
      },
      {
        heading: "Construction",
        rows: [
          { label: "Frame", value: "Heavy Duty Welded" },
          { label: "Blades", value: "Hardened Boron Steel, L-Type" },
          { label: "No. of Blades", value: "42" },
          { label: "Flange Thickness", value: "10 mm" },
        ],
      },
      {
        heading: "Performance",
        rows: [
          { label: "Working Width", value: "1800 mm" },
          { label: "Working Depth", value: "Up to 150 mm" },
          { label: "PTO Speed", value: "540 RPM" },
          { label: "Field Capacity", value: "0.4 – 0.5 ha/hr" },
        ],
      },
    ],
  },
};
