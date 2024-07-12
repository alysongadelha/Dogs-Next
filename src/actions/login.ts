"use server";

import { TOKEN_POST } from "@/utils/api";
import apiError from "@/utils/apiError";
import { cookies } from "next/headers";

const API_URL = "https://dogsapi.origamid.dev/json";

export default async function login(state: {}, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    if (!username || !password)
      throw new Error("Fill the username and password field.");

    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("User or password incorrect.");

    const data = await response.json();
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return { data: null, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
