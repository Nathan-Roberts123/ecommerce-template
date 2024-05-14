import Cart from "../../cart";
import ThinBag from "~/components/helpers/icons/ThinBag";
import ThinLove from "~/components/helpers/icons/ThinLove";
import ThinPeople from "~/components/helpers/icons/ThinPeople";
import SearchBox from "~/components/helpers/search-box";
import Link from "next/link";
import Image from "next/image";

interface MiddlebarProps {
  className?: string;
}

export default function Middlebar({ className }: MiddlebarProps) {
  return (
    <div className={`h-[86px] w-full bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex h-full items-center justify-between">
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
            <div className="h-[44px] w-[517px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex items-center space-x-6">
              <div className="favorite relative">
                <Link href="/wishlist" passHref>
                  <span rel="noopener noreferrer">
                    <span>
                      <ThinLove />
                    </span>
                  </span>
                </Link>
                <span
                  className={`absolute -right-2.5 -top-2.5  flex h-[18px] w-[18px] items-center justify-center rounded-full bg-qyellow text-[9px]`}
                >
                  1
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart" passHref>
                    <span rel="noopener noreferrer">
                      <span>
                        <ThinBag />
                      </span>
                    </span>
                  </Link>
                  <span
                    className={`absolute -right-2.5 -top-2.5  flex h-[18px] w-[18px] items-center justify-center rounded-full bg-qyellow text-[9px]`}
                  >
                    15
                  </span>
                </div>
                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                <Link href="/profile#dashboard" passHref>
                  <span rel="noopener noreferrer">
                    <span>
                      <ThinPeople />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
