import React from "react";
import Link from "next/link";

export interface CategoryListItemProps {
  text: string;
  icon: React.ReactNode;
}

function CategoryListItem({ text, icon }: CategoryListItemProps) {
  return (
    <li className="category-item">
      <Link href="/all-products">
        <div className="flex h-10 cursor-pointer items-center justify-between bg-white  px-5 text-qblack transition-all duration-300 ease-in-out hover:bg-qyellow">
          <div className="flex items-center space-x-6">
            <span>{icon}</span>
            <span className="font-400 text-xs">{text}</span>
          </div>
          <div>
            <span>
              <svg
                className="fill-current"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.49805"
                  y="0.818359"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(45 1.49805 0.818359)"
                />
                <rect
                  x="5.58984"
                  y="4.90918"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(135 5.58984 4.90918)"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CategoryListItem;
