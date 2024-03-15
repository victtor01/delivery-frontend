import { api } from "@/api";
import Cookies from "js-cookie";

interface UseApiPrivateProps {
  method: string;
  body?: any; // Faça o corpo opcional, já que nem todos os métodos podem precisar dele
}

const useApiPrivate = async (
  url: string,
  { method, body = {} }: UseApiPrivateProps
) => {
  if (!(method in api)) {
    throw new Error(`Método ${method} não é suportado pela API.`);
  }

  if (!url) {
    throw new Error("Erro ao tentar usar o hook apiPrivate");
  }

  try {
    const access_token = Cookies.get("access_token") || null;

    if (!access_token) throw new Error("Não foi encontrado passaporte");

    const { data } = await api({
      data: { ...body },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      method,
      url,
    });

    return { data };
  } catch (error: any) {
    console.log(error);

    try {
      const access_token = Cookies.get("access_token") || null;
      const refresh_token = Cookies.get("refresh_token") || null;

      if (!access_token || !refresh_token) {
        throw new Error(`Erro ao tentar pegar o passaporte`);
      }

      const response = await api({
        method: "post",
        url: "/auth/refresh",
        data: {
          access_token,
          refresh_token,
        },
      });

      const { data } = response;

      Cookies.set("access_token", data.access_token);
      Cookies.set("refresh_token", data.refresh_token);

      const { data: tryData } = await api({
        data: { ...body },
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
        method,
        url,
      });

      return tryData;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao tentar novamente após atualizar o token");
    }
  }
};

export { useApiPrivate };
