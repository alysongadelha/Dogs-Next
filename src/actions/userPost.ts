"use server";

import { TOKEN_POST, USER_POST } from "@/utils/api";
import apiError from "@/utils/apiError";

const API_URL = "https://dogsapi.origamid.dev/json";

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    if (!username || !email || !password)
      throw new Error("Fill the username and password field");

    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("User or Email already exist.");

    const data = await response.json();

    return { data: null, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
