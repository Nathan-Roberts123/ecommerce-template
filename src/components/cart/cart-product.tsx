import React from "react";
import Image from "next/image";
import { type TProduct } from "~/types";

export type cartProduct = Omit<TProduct, "review" | "brand" | "product_type">;

export interface CartProductProps {
  product: cartProduct;
}

function CartProduct({ product }: CartProductProps) {
  return (
    <li className="flex h-full w-full">
      <div className="my-[20px] flex items-center justify-center space-x-[6px] px-4">
        <div className="h-full w-[65px]">
          <Image
            src={product.image}
            alt=""
            fill
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex h-full flex-1 flex-col justify-center ">
          <p className="title font-600 mb-2 line-clamp-2 text-[13px] leading-4 text-qblack hover:text-blue-600">
            {product.title}
          </p>

          <p className="price">
            <span className="offer-price font-600 ml-2 text-[15px] text-qred">
              ${product.price}
            </span>
          </p>
        </div>
      </div>
      <span className="mr-[15px] mt-[20px] inline-flex cursor-pointer ">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="inline fill-current text-[#AAAAAA] hover:text-qred"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z" />
        </svg>
      </span>
    </li>
  );
}

export default CartProduct;
