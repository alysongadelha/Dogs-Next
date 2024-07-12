"use server";

import { PASSWORD_LOST } from "@/utils/api";
import apiError from "@/utils/apiError";

export default async function passwordLost(state: {}, formData: FormData) {
  const login = formData.get("login");
  const defaultUrl = formData.get("url");

  try {
    if (!login) throw new Error("Fill the data.");

    const { url } = PASSWORD_LOST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        url: defaultUrl,
      }),
    });

    if (!response.ok) throw new Error("User or Email do not exist.");

    const data = await response.json();

    return { data: null, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
