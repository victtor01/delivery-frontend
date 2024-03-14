import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full min-h-screen flex flex-col bg-gradient-45 from-purple-600 to-orange-500 relative">
      <div className="absolute w-full h-screen overflow-hidden pointer-events-none">
        <span className="w-[10rem] h-[10rem] absolute top-0 left-0 bg-purple-400 rounded-full translate-x-[-50%] translate-y-[-50%] opacity-60" />
        <span className="w-[10rem] h-[10rem] absolute top-[50%] left-[10%] bg-purple-400 rounded-full translate-x-[-50%] translate-y-[-50%] opacity-60" />
        <span className="w-[8rem] h-[8rem] absolute top-[20%] left-[50%] bg-orange-300 rounded-full translate-x-[-50%] translate-y-[-50%] opacity-30" />
        <span className="w-[5rem] h-[5rem] absolute top-[10%] left-[80%] bg-orange-300 rounded-full translate-x-[-50%] translate-y-[-50%] opacity-30" />
        <span className="w-[5rem] h-[5rem] absolute top-[90%] left-[40%] bg-purple-300 rounded-full translate-x-[-50%] translate-y-[-50%] opacity-30" />
        <span className="w-[11rem] h-[11rem] absolute bottom-0 right-0 bg-orange-500 rounded-full opacity-70 translate-x-[40%] translate-y-[40%]" />
      </div>
      <header className="w-full p-5 h-auto flex justify-between items-center z-20">
        <button className="p-4 rounded-full bg-white shadow ">
          <FaArrowLeftLong />
        </button>
      </header>
      {children}
    </section>
  );
}
