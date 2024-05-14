"use client";

import { useState } from "react";
import Input from "~/components/helpers/input";
import WrapperCard from "../components/wrapper-card";

export default function Signup() {
  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };
  return (
    <WrapperCard type="signin">
      <div className="input-area">
        <div className="mb-5 flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
          <Input
            placeholder="Demo Name"
            label="Frist Name*"
            name="fname"
            type="text"
            className="h-[50px]"
          />

          <Input
            placeholder="Demo Name"
            label="Last Name*"
            name="lname"
            type="text"
            className="h-[50px]"
          />
        </div>
        <div className="mb-5 flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
          <Input
            placeholder="Demo@gmail.com"
            label="Email Address*"
            name="email"
            type="email"
            className="h-[50px]"
          />

          <Input
            placeholder="0213 *********"
            label="Phone*"
            name="phone"
            type="text"
            className="h-[50px]"
          />
        </div>

        <div className="input-item mb-5">
          <h6 className="input-label mb-2 block text-[13px] font-normal capitalize text-qgray ">
            Country*
          </h6>
          <div className="mb-2 flex h-[50px] w-full items-center justify-between border border-[#EDEDED] px-5">
            <span className="text-[13px] text-qgraytwo">Select Country</span>
            <span>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                  fill="#222222"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="input-item mb-5">
          <Input
            placeholder="Your address Here"
            label="Address*"
            name="address"
            type="text"
            className="h-[50px]"
          />
        </div>
        <div className="mb-5 flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0">
          <div className="w-1/2">
            <h6 className="input-label mb-2 block text-[13px] font-normal capitalize text-qgray ">
              Town / City*
            </h6>
            <div className="mb-2 flex h-[50px] w-full items-center justify-between border border-[#EDEDED] px-5">
              <span className="text-[13px] text-qgraytwo">Maiyami</span>
              <span>
                <svg
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                    fill="#222222"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-5 h-[50px] w-full sm:mb-0">
              <Input
                label="Postcode / ZIP*"
                className="h-full w-full"
                type="text"
                placeholder="00000"
              />
            </div>
          </div>
        </div>
        <div className="signin-area mb-3">
          <div className="flex justify-center">
            <button
              type="button"
              className="black-btn bg-purple flex h-[50px] w-full items-center justify-center text-sm font-semibold text-white"
            >
              <span>Create Account</span>
            </button>
          </div>
        </div>
      </div>
    </WrapperCard>
  );
}
