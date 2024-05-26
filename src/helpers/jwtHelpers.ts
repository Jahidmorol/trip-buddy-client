import { jwtDecode } from "jwt-decode";

type JwtPayloadWithRole = {
  id: string;
  role: string;
};

const decodedJWT = (token: string) => {
  return jwtDecode<JwtPayloadWithRole>(token);
};

export const jwtHelpers = {
  decodedJWT,
};
