"use client";

import { useAtom } from "jotai";
import { queryClient } from "./query-client";
import Cookies from "js-cookie";
import { userLogged } from "@/atoms/user-atom";
import { useRouter } from "next/navigation";

const useSession = () => {
  const [_, setLogged] = useAtom(userLogged);
  const { push } = useRouter();
  const logout = () => {
    // invalide queries
    queryClient.invalidateQueries({ queryKey: ["todos"] });
    // remove cookies
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    // set logged false
    setLogged(false);

    push("/");
  };

  const getAuthorization = () => {
    const access_token = Cookies.get("access_token");
    const refresh_token = Cookies.get("refresh_token");

    return {
      access_token,
      refresh_token,
    };
  };

  return {
    logout,
    getAuthorization,
  };
};

export { useSession };
