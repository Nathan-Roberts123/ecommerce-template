"use client";
import { useEffect, useState } from "react";
import datas from "../../data/products.json";
import ProductSection from "../helpers/product-section";

export default function Home() {
  const { products } = datas;

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
