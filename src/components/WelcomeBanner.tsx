const WelcomeBanner = () => (
  <section className="bg-banner text-banner-foreground py-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm md:text-base text-center md:text-left">
        Welcome to <strong className="font-heading text-lg">MAAN AGRO INDUSTRIES</strong> –{" "}
        <em>India's Leading Combine Harvester &amp; Tractor Manufacturers.</em>
      </p>
      <span className="text-sm font-semibold uppercase tracking-wider whitespace-nowrap italic">
        BHOGAL COMBINE SPARE PARTS
      </span>
    </div>
  </section>
);

export default WelcomeBanner;
