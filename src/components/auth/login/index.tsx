"use client";

import { useState } from "react";
import Input from "~/components/helpers/input";
import WrapperCard from "../components/wrapper-card";

export default function Login() {
  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };
  return (
    <WrapperCard type="login">
      <div className="input-area">
        <div className="input-item mb-5">
          <Input
            placeholder="example@quomodosoft.com"
            label="Email Address*"
            name="email"
            type="email"
            className="h-[50px]"
          />
        </div>
        <div className="input-item mb-5">
          <Input
            placeholder="● ● ● ● ● ●"
            label="Password*"
            name="password"
            type="password"
            className="h-[50px]"
          />
        </div>
        <div className="forgot-password-area mb-7 flex items-center justify-between">
          <div className="remember-checkbox flex items-center space-x-2.5">
            <button
              onClick={rememberMe}
              type="button"
              className="border-light-gray flex h-5 w-5 items-center justify-center border text-qblack"
            >
              {checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <span onClick={rememberMe} className="text-base text-black">
              Remember Me
            </span>
          </div>
          <a href="/forgot-password" className="text-base text-qyellow">
            Forgot Password
          </a>
        </div>
        <div className="signin-area">
          <div className="flex justify-center">
            <button
              type="button"
              className="black-btn bg-purple mb-6 flex h-[50px] w-full items-center justify-center text-sm font-semibold text-white"
            >
              <span>Log In</span>
            </button>
          </div>
        </div>
      </div>
    </WrapperCard>
  );
}
