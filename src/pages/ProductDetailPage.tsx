import Layout from "@/components/Layout";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProductDetail from "@/components/ProductDetail";
import FeaturesSection from "@/components/FeaturesSection";
import TechnicalSpecs from "@/components/TechnicalSpecs";

const ProductDetailPage = () => (
  <Layout>
    <BreadcrumbBanner />
    <ProductDetail />
    <FeaturesSection />
    <TechnicalSpecs />
  </Layout>
);

export default ProductDetailPage;
