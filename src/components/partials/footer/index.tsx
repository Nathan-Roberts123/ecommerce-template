import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section-wrapper bg-white print:hidden">
      <div className="container-x mx-auto block pt-[56px]">
        <div className="flex w-full flex-col items-center">
          {/* logo area */}
          <div className="mb-[40px]">
            <Link href="/">
              <img
                width="152"
                height="36"
                src={`/assets/images/logo.svg`}
                alt="logo"
              />
            </Link>
          </div>
          <div className="h-[1px] w-full bg-[#E9E9E9]"></div>
        </div>
      </div>
    </footer>
  );
}
