import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { productCatalog } from "@/data/products";

const GenericProductPage = () => {
  const { slug = "" } = useParams();
  const product = productCatalog[slug];

  if (!product) return <Navigate to="/products" replace />;

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-primary py-4">
        <div className="container flex items-center gap-2 text-primary-foreground flex-wrap">
          <Link to="/" className="text-sm opacity-80 hover:opacity-100">Home</Link>
          <span className="opacity-60">/</span>
          <Link to="/products" className="text-sm opacity-80 hover:opacity-100">Products</Link>
          <span className="opacity-60">/</span>
          <span className="font-heading font-bold text-sm uppercase">{product.title}</span>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="border border-border rounded-lg overflow-hidden bg-muted p-6 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-h-[420px] object-contain"
              />
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1 uppercase">
                {product.title}
              </h1>
              <p className="text-muted-foreground font-heading text-lg mb-6">
                {product.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0 mb-6">
                {product.quickSpecs.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between py-3 border-b border-border gap-3"
                  >
                    <span className="font-semibold text-sm text-foreground">{s.label}</span>
                    <span className="text-sm text-muted-foreground text-right">{s.value}</span>
                  </div>
                ))}
              </div>
              <Link to={`/application-form?product=${encodeURIComponent(product.title)}`}>
                <Button size="lg" className="uppercase tracking-wider font-bold">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="bg-primary text-primary-foreground py-3 px-6 rounded-t-lg">
            <h2 className="font-heading text-xl font-bold text-center uppercase">
              {product.title} – Features & Highlights
            </h2>
          </div>
          <div className="bg-card border border-t-0 border-border rounded-b-lg p-6 md:p-8">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.intro}</p>
            <h3 className="font-heading text-base font-bold text-foreground mb-4">
              Features and Highlights:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
              <ul className="space-y-2">
                {product.features.slice(0, Math.ceil(product.features.length / 2)).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-accent mt-0.5">●</span>
                    {f}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {product.features.slice(Math.ceil(product.features.length / 2)).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-accent mt-0.5">●</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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
                  {product.technical.map((group) => (
                    <>
                      <tr key={group.heading}>
                        <td
                          colSpan={2}
                          className="bg-muted font-heading font-bold text-primary text-sm uppercase px-6 py-3 border-b border-border"
                        >
                          {group.heading}
                        </td>
                      </tr>
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
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic px-6 py-4 border-t border-border">
              Due to our policy of continuous R&amp;D in product improvement, the product design,
              colour and/or technical specifications may change without prior notice. Please confirm
              the latest specifications by contacting us at bhogalcombinemaan913@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GenericProductPage;
