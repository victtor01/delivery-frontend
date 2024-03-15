"use client";

import { userLogged } from "@/atoms/user-atom";
import { useApiPrivate } from "@/hooks/api-private";
import { useSession } from "@/hooks/use-session";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const usePublicRoute = () => {
  const { getAuthorization, logout } = useSession();
  const { access_token } = getAuthorization();
  const [_, setLogged] = useAtom(userLogged);

  const { isLoading, data, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const api = await useApiPrivate("/auth/verify-passport", {
        method: "post",
        body: {
          access_token,
        },
      });
      return api;
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!access_token,
  });

  useEffect(() => {
    if (!isLoading && isError && access_token) {
      logout();
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, [isLoading, isError]);

  return {
    isLoading,
    data,
  };
};

const PublicRoute = ({ children }: PrivateRouteProps) => {
  const { isLoading, data } = usePublicRoute();

  return children;
};

export { PublicRoute };
