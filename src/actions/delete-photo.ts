"use server";

import { PHOTO_DELETE, PHOTO_POST, USER_POST } from "@/utils/api";
import apiError from "@/utils/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function deletePhoto(id: string) {
  const token = cookies().get("token")?.value;

  try {
    if (!token) throw new Error("Invalid token");
    const { url } = PHOTO_DELETE(id);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) throw new Error("Error trying to delete.");
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  redirect("/account");
}
