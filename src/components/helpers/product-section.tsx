import { type TProduct } from "~/types";
import ProductCard from "./cards/product-card";
import DataIteration from "./data-iteration";
import ViewMoreTitle from "./view-more-title";

interface ProdcutSectionProps {
  className?: string;
  categoryTitle: string;
  sectionTitle: string;
  seeMoreUrl: string;
  products: TProduct[];
}

export default function ProductSection(props: ProdcutSectionProps) {
  const { className, sectionTitle, seeMoreUrl, products = [] } = props;

  // useEffect(() => {
  //   if (window.matchMedia("(max-width: 1024px)")) {
  //     setLength(2);
  //   }
  // }, []);
  return (
    <div data-aos="fade-up" className={`section-style-one ${className ?? ""}`}>
      <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
        <div className="products-section w-full">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[30px]">
            <DataIteration data={products} startLength={0} endLength={9}>
              {({ data: product }: { data: TProduct }) => (
                <div key={product.id} className="item">
                  <ProductCard product={product} />
                </div>
              )}
            </DataIteration>
          </div>
        </div>
      </ViewMoreTitle>
    </div>
  );
}
