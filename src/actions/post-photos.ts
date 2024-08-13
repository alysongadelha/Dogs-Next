"use server";

import { PHOTO_POST, USER_POST } from "@/utils/api";
import apiError from "@/utils/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function postPhoto(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const nome = formData.get("nome");
  const idade = formData.get("idade");
  const peso = formData.get("peso") as string;
  const img = formData.get("img") as File;

  try {
    if (!nome || !idade || !peso || img.size === 0)
      throw new Error("Fill all fields.");

    if (!token) throw new Error("You must be logged");
    const { url } = PHOTO_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error("User or Email already exist.");
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  redirect("/account");
}
