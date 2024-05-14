export default function SearchBox({ className }: { className?: string }) {
  return (
    <>
      <div
        className={`flex h-full w-full items-center  border border-qgray-border bg-white ${
          className ?? ""
        }`}
      >
        <div className="h-full flex-1 bg-red-500">
          <form action="#" className="h-full">
            <input
              type="text"
              className="search-input"
              placeholder="Search Product..."
            />
          </form>
        </div>
        <div className="h-[22px] w-[1px] bg-qgray-border"></div>
        <button
          className="font-600 search-btn h-full w-[93px] text-sm"
          type="button"
        >
          Search
        </button>
      </div>
    </>
  );
}
