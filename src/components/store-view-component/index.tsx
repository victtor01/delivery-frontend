import Link from "next/link";

const StoreViewComponentPhoto = () => {
  return (
    <header
      className="p-3 h-[5rem] relative bg-gradient-45
      from-purple-500 to-orange-400"
    >
      <span
        className="w-10 h-10 rounded-full absolute bottom-0 left-[0.5rem] 
        bg-purple-600 translate-y-[40%]"
      ></span>
    </header>
  );
};

const StoreViewComponentInformation = () => {
  return (
    <section className="p-3">
      <div className="flex flex-col gap-3 mt-2">
        <div className="w-full justify-between flex items-center">
          <span className="font-semibold text-gray-500 flex-1">
            Salgadaria.
          </span>
          <span className="font-semibold text-white bg-rose-500 p-1 text-sm rounded">
            Fechado
          </span>
        </div>
        <div className="opacity-75">Melhor loja de salgados da região!</div>
      </div>
    </section>
  );
};

const StoreViewComponent = () => {
  return (
    <Link
      href={""}
      className="flex flex-col bg-white shadow-xl shadow-blue-50 min-h-[13rem] w-auto h-auto 
    rounded-md overflow-hidden hover:translate-y-[-0.3rem] transition-transform"
    >
      <StoreViewComponentPhoto />
      <StoreViewComponentInformation />
    </Link>
  );
};

export { StoreViewComponent };
