import ThinBag from "~/components/helpers/icons/ThinBag";
import Middlebar from "./middlebar";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";

interface Header {
  className?: string;
  drawerAction: () => void;
}

export default function Header({ className, drawerAction }: Header) {
  return (
    <header className={` ${className ?? ""} header-section-wrapper relative`}>
      <Middlebar className="quomodo-shop-middle-bar hidden lg:block" />
      <div className="quomodo-shop-drawer block h-[60px] w-full bg-white lg:hidden">
        <div className="flex h-full w-full items-center justify-between px-5">
          <div onClick={drawerAction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <div className="cursor-pointer">
            <Link href="/">
              <Image
                width="152"
                height="36"
                src={`/assets/images/logo.svg`}
                alt="logo"
              />
            </Link>
          </div>
          <div className="cart relative cursor-pointer">
            <Link href="/cart" passHref>
              <span rel="noopener noreferrer">
                <span>
                  <ThinBag />
                </span>
              </span>
            </Link>
            <span className="absolute -right-2.5 -top-2.5  flex h-[18px] w-[18px] items-center justify-center rounded-full bg-qyellow text-[9px] text-qblack">
              15
            </span>
          </div>
        </div>
      </div>
      <Navbar className="quomodo-shop-nav-bar hidden lg:block" />
    </header>
  );
}
