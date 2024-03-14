import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full flex bg-white text-gray-600 border px-3">
      <div className="items-center flex mx-auto w-full max-w-main justify-between">
        <div className="font-semibold">
          <h1>Melhores lojas.</h1>
        </div>
        <div className="flex gap-4 items-center">
          <button className="font-semibold text-gray-700 opacity-80 hover:opacity-100">
            Entrar
          </button>
          <button className="p-4 bg-orange-500 opacity-90 hover:opacity-100 text-white">
            <MdOutlineLocalGroceryStore size="20"/>
          </button>
        </div>
      </div>
    </header>
  );
};
export { Header };
