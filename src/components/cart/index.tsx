import Link from "next/link";
import CartProduct from "./cart-product";
import { type cartProduct } from "./cart-product";

interface CartProps {
  className?: string;
}

const cartProducts: cartProduct[] = [
  {
    id: "1e",
    image: "/assets/images/product-img-1.jpg",
    title: "iPhone 12 Pro Max 128GB Golen colour",
    price: 38,
  },
  {
    id: "2e",
    image: "/assets/images/product-img-1.jpg",
    title: "iPhone 12 Pro Max 128GB Golen colour",
    price: 38,
  },
  {
    id: "3e",
    image: "/assets/images/product-img-1.jpg",
    title: "iPhone 12 Pro Max 128GB Golen colour",
    price: 38,
  },
];

export default function Cart({ className }: CartProps) {
  return (
    <>
      <div
        style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
        className={`cart-wrappwer w-[300px] border-t-[3px] bg-white ${
          className ?? ""
        }`}
      >
        <div className="h-full w-full">
          <div className="product-items h-[310px] overflow-y-scroll">
            <ul>
              {cartProducts.map((prd) => {
                return <CartProduct key={prd.id} product={prd} />;
              })}
            </ul>
          </div>
          <div className="mb-[12px] mt-[20px] w-full px-4">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="product-actions mb-[30px] px-4">
            <div className="total-equation mb-[28px] flex items-center justify-between">
              <span className="font-500 text-[15px] text-qblack">Subtotal</span>
              <span className="font-500 text-[15px] text-qred ">$365</span>
            </div>
            <div className="product-action-btn">
              <Link href="/cart">
                <div className="gray-btn mb-[10px] h-[50px] w-full cursor-pointer">
                  <span>View Cart</span>
                </div>
              </Link>
              <Link href="/checkout">
                <div className="h-[50px] w-full cursor-pointer">
                  <div className="yellow-btn">
                    <span className="text-sm">Checkout Now</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-[20px] w-full px-4">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="flex justify-center py-[15px]">
            <p className="font-500 text-[13px] text-qgray">
              Get Return within <span className="text-qblack">30 days</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
