import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="w-full h-screen overflow-auto flex flex-col bg-gradient-45 from-purple-100 to-orange-100">
      <header className="w-full p-5 h-auto flex justify-between items-center z-20">
        <Link
          href="/"
          className="p-4 rounded-full bg-zinc-800 text-white shadow-zinc-600 opacity-95 hover:opacity-100"
        >
          <FaArrowLeftLong />
        </Link>
      </header>
      {children}
    </section>
  );
}
