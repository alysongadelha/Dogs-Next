// import { jwtVerify } from "jose";

export const verifyToken = async (token: string): Promise<boolean> => {
  if (!token) return false;

  try {
    // Verify the token
    // await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SALT), {
    //   algorithms: ["HS256", "HS384", "HS512", "HS512"],
    // });
    return true;
  } catch (error) {
    return false;
  }
};
