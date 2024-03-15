"use client";

import Link from "next/link";
import { UserLogged } from "./user-logged";

interface UserComponentIconProps {
  logged: boolean;
}

const SignedOut = () => (
  <Link
    href="/login"
    className="font-semibold text-gray-700 opacity-80 hover:opacity-100"
  >
    Entrar
  </Link>
);

const UserComponentIcon = ({ logged }: UserComponentIconProps) => {
  return logged ? <UserLogged /> : <SignedOut />;
};

export { UserComponentIcon };
