"use server";

import { PASSWORD_RESET } from "@/utils/api";
import apiError from "@/utils/api-error";
import { redirect } from "next/navigation";

export default async function passwordReset(state: {}, formData: FormData) {
  const login = formData.get("login");
  const key = formData.get("key");
  const password = formData.get("password") as string;

  try {
    if (!login || !key || !password) throw new Error("Fill the data.");
    if (password.length > 0)
      throw new Error("The password must have at least six characters.");

    const { url } = PASSWORD_RESET();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Not authorized.");
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect("login");
}
