type SpecRow = {
  label: string;
  value: string;
  value2?: string;
};

type SpecGroup = {
  heading: string;
  cols?: string[];
  rows: SpecRow[];
};

const specs: SpecGroup[] = [
  {
    heading: "General",
    rows: [
      { label: "Manufacturer", value: "Maan Agro Industries" },
      { label: "Address", value: "Industrial Area, Nabha, Punjab, India" },
      { label: "Make", value: "MAAN" },
      { label: "Model", value: "913 – Crop Master" },
      { label: "Type", value: "Self Propelled Combine Harvester" },
    ],
  },
  {
    heading: "Engine",
    rows: [
      { label: "Make", value: "Ashok Leyland" },
      { label: "Model", value: "ALU 402" },
      { label: "Type", value: "4 Stroke, Water Cooled, Direct Injection Diesel" },
      { label: "Max Speed (No Load)", value: "2400 RPM" },
      { label: "Rated Speed", value: "2200 RPM" },
      { label: "No. of Cylinders", value: "Six" },
    ],
  },
  {
    heading: "Threshing Drum",
    cols: ["", "For Wheat", "For Paddy"],
    rows: [
      { label: "Type", value: "Rasp Bar", value2: "Peg Tooth" },
      { label: "Width (mm)", value: "1270", value2: "1265" },
      { label: "Outside Dia (mm)", value: "600", value2: "600" },
    ],
  },
  {
    heading: "Straw Walker",
    rows: [
      { label: "No. of Straw Walkers", value: "Five" },
      { label: "Type", value: "Closed Rack Type, Serrated Side Edges" },
      { label: "Length (mm)", value: "3990" },
      { label: "Width (mm)", value: "240" },
      { label: "Effective Separating Area (m²)", value: "5.31" },
    ],
  },
  {
    heading: "Grain Tank",
    rows: [
      { label: "Location", value: "On Top, Behind Operator's Seat" },
      { label: "Capacity – Volume (m³)", value: "2.180" },
      { label: "Capacity – Mass (kg)", value: "1810" },
    ],
  },
  {
    heading: "Tyres & Dimensions",
    rows: [
      { label: "Front Tyres", value: "18.4-30, 12PR" },
      { label: "Rear Tyres", value: "9.00, 16PR" },
      { label: "Brake System", value: "Disc Brake" },
      { label: "Ground Clearance (mm)", value: "1761" },
      { label: "Weight", value: "9400 kg +" },
    ],
  },
  {
    heading: "Cutter Bar Assembly",
    rows: [
      { label: "Working Width (mm)", value: "4460" },
      { label: "Effective Cutter Bar Width (mm)", value: "4250" },
      { label: "No. of Knife Guards", value: "58 (29 Pairs), 75 mm Apart" },
      { label: "No. of Knife Blades", value: "59, Serrated" },
      { label: "Knife Stroke (mm)", value: "90" },
    ],
  },
];

const TechnicalSpecs = () => (
  <section className="py-12 bg-background">
    <div className="container">
      <div className="bg-primary text-primary-foreground py-3 px-6 rounded-t-lg">
        <h2 className="font-heading text-xl font-bold text-center uppercase">
          Technical Specifications
        </h2>
      </div>
      <div className="bg-card border border-t-0 border-border rounded-b-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {specs.map((group) => (
                <>
                  <tr key={group.heading}>
                    <td
                      colSpan={group.cols ? 3 : 2}
                      className="bg-muted font-heading font-bold text-primary text-sm uppercase px-6 py-3 border-b border-border"
                    >
                      {group.heading}
                    </td>
                  </tr>
                  {group.cols && (
                    <tr key={`${group.heading}-cols`}>
                      {group.cols.map((c, i) => (
                        <td
                          key={i}
                          className="px-6 py-2 font-semibold text-foreground border-b border-border bg-muted/50"
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  )}
                  {group.rows.map((row) => (
                    <tr
                      key={`${group.heading}-${row.label}`}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-2.5 font-semibold text-foreground border-b border-border w-1/3">
                        {row.label}
                      </td>
                      <td className="px-6 py-2.5 text-muted-foreground border-b border-border">
                        {row.value}
                      </td>
                      {row.value2 !== undefined && (
                        <td className="px-6 py-2.5 text-muted-foreground border-b border-border">
                          {row.value2}
                        </td>
                      )}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground italic px-6 py-4 border-t border-border">
          Due to our policy of continuous R&D in product improvement, the
          product design, colour and/or technical specifications may change
          without prior notice. Please confirm latest specifications by
          contacting us at info@maanagro.com.
        </p>
      </div>
    </div>
  </section>
);

export default TechnicalSpecs;
