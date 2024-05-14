"use client";
import React from "react";
import { useState, useEffect } from "react";
import Arrow from "~/components/helpers/icons/Arrow";
import CategoryListItem from "./category-list-item";
import { CategoryListItemProps } from "./category-list-item";

import Laptop from "~/components/helpers/icons/Laptop";
import Gaming from "~/components/helpers/icons/Gaming";
import Vehicle from "~/components/helpers/icons/Vehicle";
import Furnitures from "~/components/helpers/icons/Furnitures";
import Sport from "~/components/helpers/icons/Sport";
import Drink from "~/components/helpers/icons/Drink";
import Fashion from "~/components/helpers/icons/Fashion";
import Toilet from "~/components/helpers/icons/Toilet";
import Makeup from "~/components/helpers/icons/Makeup";
import Baby from "~/components/helpers/icons/Baby";

const CategoryItems: CategoryListItemProps[] = [
  {
    text: "Mobile & Laptops",
    icon: <Laptop />,
  },
  {
    text: "Gaming Entertainment",
    icon: <Gaming />,
  },
  {
    text: "Image & Video",
    icon: <Laptop />,
  },
  {
    text: "Vehicle",
    icon: <Vehicle />,
  },
  {
    text: "Furnitures",
    icon: <Furnitures />,
  },
  {
    text: "Sport",
    icon: <Sport />,
  },
  {
    text: "Food & Drinks",
    icon: <Drink />,
  },
  {
    text: "Fashion Accessories",
    icon: <Fashion />,
  },
  {
    text: "Toilet & Sanitation",
    icon: <Toilet />,
  },
  {
    text: "Makeup Corner",
    icon: <Makeup />,
  },
  {
    text: "Baby Items",
    icon: <Baby />,
  },
];

function CategoryList() {
  const [elementsSize, setSize] = useState("0px");
  const [categoryToggle, setToggle] = useState(false);

  // const getItems = document.querySelectorAll(`.categories-list li`).length;
  // if (categoryToggle && getItems > 0) {
  //   setSize(`${40 * getItems}px`);
  // }

  const handler = () => {
    setToggle(!categoryToggle);
  };

  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div className="category relative mt-[6px] h-[53px] w-[270px] rounded-t-md bg-white px-5">
      <button
        onClick={handler}
        type="button"
        className="flex h-full w-full items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <span>
            <svg
              className="fill-current"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="14" height="1" />
              <rect y="8" width="14" height="1" />
              <rect y="4" width="10" height="1" />
            </svg>
          </span>
          <span className="font-600 text-sm text-qblacktext">
            All Categories
          </span>
        </div>
        <div>
          <Arrow
            width="5.78538"
            height="1.28564"
            className="fill-current text-qblacktext"
          />
        </div>
      </button>
      {categoryToggle && (
        <div
          className="fixed left-0 top-0 -z-10 h-full w-full"
          onClick={handler}
        ></div>
      )}
      <div
        className="category-dropdown absolute left-0 top-[53px] w-full overflow-hidden"
        style={{ height: `${elementsSize} ` }}
      >
        <ul className="categories-list">
          {CategoryItems.map((item: CategoryListItemProps) => {
            return <CategoryListItem text={item.text} icon={item.icon} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
