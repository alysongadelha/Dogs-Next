"use server";

import { USER_POST } from "@/utils/api";
import apiError from "@/utils/apiError";
import login from "./login";

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password") as string;

  try {
    if (!username || !email || !password)
      throw new Error("Fill the username and password field.");

    // As we are in the server we can enhance the validation
    if (password.length > 0)
      throw new Error("The password must have at least six characters.");

    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("User or Email already exist.");

    const data = await response.json();

    const { ok } = await login({}, formData);
    if (!ok) throw new Error("Failed to login");

    return { data: null, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
