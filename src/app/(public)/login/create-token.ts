"use server";

import * as jose from "jose";

interface createTokenProps {
  payload: any;
  tokenExpiration?: string;
}

export const createToken = async ({
  payload = {},
  tokenExpiration = "1d",
}: createTokenProps): Promise<string> => {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);

  return await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime(tokenExpiration)
    .sign(secret);
};
