import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";

export default function Login() {
  return (
    <form className="p-6 bg-white m-auto w-full max-w-[58rem] min-h-[32rem] flex gap-10 rounded z-20 shadow-xl">
      <section className="flex flex-col gap-4 flex-1 items-center justify-center overflow-hidden relative">
        <h1 className="text-3xl text-center font-semibold text-gray-700 z-20">
          Bem vindo ao melhor site de{" "}
          <b className="text-transparent bg-clip-text bg-orange-500">
            delivery
          </b>{" "}
          do nordeste!
        </h1>
        <Link
          href={""}
          className="flex gap-3 items-center text-lg font-semibold p-2 px-4 rounded text-white 
        bg-orange-500 opacity-90 hover:opacity-100 hover:gap-4 transition-[gap]"
        >
          Saiba mais <FaArrowRight />
        </Link>
      </section>

      <span className="min-h-full flex bg-zinc-100 w-[1px]" />
      <section className="flex-1 flex justify-center items-center flex-col gap-3">
        <div className="text-gray-500">
          <h1 className="text-2xl font-semibold text-gray-500">Login</h1>
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="email" className="flex flex-col w-full gap-2">
            <span className="font-semibold text-gray-500">Email *</span>
            <input
              type="text"
              className="w-full p-2 bg-zinc-50 outline-none border-2 border-transparent 
              focus:border-orange-500 rounded focus:shadow focus:shadow-orange-100"
              placeholder="example@gmail.com"
            />
          </label>
          <label htmlFor="email" className="flex flex-col w-full gap-2">
            <div className="w-full justify-between flex items-end">
              <span className="font-semibold text-gray-500">Senha *</span>
              <Link
                href="/"
                className="font-semibold opacity-70 hover:opacity-100 text-gray-700 text-sm"
              >
                Esqueci minha senha
              </Link>
            </div>
            <input
              type="password"
              className="w-full p-2 bg-zinc-50 outline-none border-2 border-transparent 
              focus:border-orange-500 rounded focus:shadow focus:shadow-orange-100"
              placeholder="your password"
            />
          </label>
        </div>
        <footer className="w-full flex flex-col">
          <button className="w-full p-3 bg-orange-500 font-semibold text-white opacity-90 hover:opacity-100">
            Entrar.
          </button>
          <Link
            href={"/"}
            className="font-semibold mt-1 text-zinc-800 underline underline-offset-2 opacity-90 hover:opacity-100"
          >
            Criar uma conta gratuita.
          </Link>
        </footer>
        <div className="relative justify-center flex items-center flex-col my-3">
          <span className="w-[20rem] min-w-full flex h-[1px] bg-gradient-to-r from-transparent to-transparent via-zinc-300 " />
          <span className="bg-white absolute p-2 font-semibold text-gray-600">
            Ou
          </span>
        </div>
        <button className="w-full p-3 border rounded flex gap-3 items-center text-gray-700 font-semibold hover:bg-zinc-50">
          <IoLogoGoogle />
          <span>Entrar com o google</span>
        </button>
      </section>
    </form>
  );
}
