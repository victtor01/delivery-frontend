"use client";

import Link from "next/link";
import { UserLogged } from "./user-logged";
import { BiLogIn } from "react-icons/bi";

interface UserComponentIconProps {
  logged: boolean;
}

const SignedOut = () => (
  <Link
    href="/login"
    className="font-semibold bg-gradient-45 from-purple-200 to-orange-200 text-black p-2 px-4 rounded-md opacity-80 hover:opacity-100"
  >
    Entrar
  </Link>
);

const UserComponentIcon = ({ logged }: UserComponentIconProps) => {
  return logged ? <UserLogged /> : <SignedOut />;
};

export { UserComponentIcon };
