import React from "react";
import Thumbnail from "~/components/helpers/Thumbnail";
import Link from "next/link";
import GoogleIcon from "~/components/helpers/icons/GoogleIcon";

interface WrapperCard {
  type: "login" | "signin";
  children: React.ReactNode;
}

function WrapperCard({ type, children }: WrapperCard) {
  return (
    <div className="login-page-wrapper w-full py-10">
      <div className="container-x mx-auto">
        <div className="relative items-center lg:flex">
          <div className="flex w-full flex-col justify-center border border-[#E0E0E0] bg-white p-5 sm:p-10 lg:w-[572px]">
            <div className="w-full">
              <div className="title-area relative mb-7 flex flex-col items-center justify-center text-center">
                <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                  {type === "login" ? "Log In" : "Create An Account"}
                </h1>
                <div className="shape -mt-6">
                  {type === "login" ? (
                    <svg
                      width="172"
                      height="29"
                      viewBox="0 0 172 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                        stroke="#FFBB38"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="354"
                      height="30"
                      viewBox="0 0 354 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                        stroke="#FFBB38"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {children}
              <a
                href="#"
                className="flex h-[50px] w-full items-center justify-center space-x-3  border border-qgray-border bg-[#FAFAFA]"
              >
                <GoogleIcon />
                <span className="text-[18px] font-normal text-qgraytwo">
                  Continue With Google
                </span>
              </a>
              <div className="signup-area mt-4 flex justify-center">
                <p className="text-base font-normal text-qgraytwo">
                  {type === "login"
                    ? "Don’t have an account ?"
                    : "Already have an account ?"}
                  <Link
                    href={type === "login" ? "/auth/signup" : "/auth/login"}
                    className="ml-2 text-qblack"
                  >
                    {type === "login" ? "Sign up free" : "Login"}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 scale-60 transform lg:flex xl:scale-100   xl:justify-center ">
            <div
              className="absolute -right-[138px] xl:-right-20"
              style={{ top: "calc(50% - 258px)" }}
            >
              <Thumbnail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WrapperCard;
