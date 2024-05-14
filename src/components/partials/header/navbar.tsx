import CategoryList from "./category-list";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div
      className={`nav-widget-wrapper relative  z-30 h-[60px] w-full bg-qyellow  ${className || ""}`}
    >
      <div className="container-x mx-auto h-full">
        <div className="relative h-full w-full">
          <div className="flex h-full w-full items-center justify-between">
            <div className="category-and-nav flex items-center space-x-3 xl:space-x-7">
              <CategoryList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
