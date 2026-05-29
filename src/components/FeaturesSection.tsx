const featuresLeft = [
  "High Road Speed",
  "High Ground Clearance",
  "Very Low Cutting Height",
  "Power Steering",
  "Powder Coated Body Paint for Long Life",
  "Heavy Duty Disc Brake",
  "Heavy Duty 5 Speed Gear Box",
  "Stainless Steel Elevators",
  "Heavy Duty Double Reel",
  "Wide Straw Walker",
];

const featuresRight = [
  "Extra Capacity Diesel Tank",
  "Thorough Threshing",
  "Clear Separation",
  "No Grain Breakage",
  "High Grain Cleanness",
  "Small Turning Radius",
  "Easy to Maintain",
  "Suitable for Wheat, Paddy, Soyabean, Sunflower & Mustard",
  "Good Maneuverability in Wet and Soft Fields",
  "Well Adapted to Slightly Wet, Lodged, or Hard to Thresh Crops",
];

const FeaturesSection = () => (
  <section className="py-12 bg-muted/50">
    <div className="container">
      <div className="bg-primary text-primary-foreground py-3 px-6 rounded-t-lg">
        <h2 className="font-heading text-xl font-bold text-center uppercase">
          MAAN 913 Crop Master – Features & Highlights
        </h2>
      </div>
      <div className="bg-card border border-t-0 border-border rounded-b-lg p-6 md:p-8">
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          MAAN 913 Crop Master is a self propelled combine harvester that
          harvests grain crops by combining three separate operations —
          harvesting, threshing and winnowing — into a single process. Crops
          harvested include wheat, oats, rye, barley, soybean, sunflower, gram
          and pulses. MAAN Combine Harvesters are among the most economically
          important labour and time saving machines in modern agriculture.
        </p>
        <h3 className="font-heading text-base font-bold text-foreground mb-4">
          Features and Highlights:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
          <ul className="space-y-2">
            {featuresLeft.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="text-accent mt-0.5">●</span>
                {f}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {featuresRight.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="text-accent mt-0.5">●</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
