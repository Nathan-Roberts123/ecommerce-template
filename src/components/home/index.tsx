"use client";

import { type TProduct } from "~/types";
import datas from "../../data/products.json";
import ProductSection from "../helpers/product-section";

export default function Home() {
  const products = datas.products as TProduct[];

  return (
    <>
      <ProductSection
        products={products}
        categoryTitle="Mobile & Tablet"
        sectionTitle="Gamer World"
        seeMoreUrl="/all-products"
        className="category-products mb-[60px]"
      />
    </>
  );
}
