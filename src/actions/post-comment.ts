"use server";

import { COMMENT_POST, PHOTO_POST, USER_POST } from "@/utils/api";
import apiError from "@/utils/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Comment } from "./get-photo";

export default async function postComment(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const comment = formData.get("comment") as string;
  const id = formData.get("id") as string;

  try {
    if (!comment || !id) throw new Error("Comment cannot be empty.");

    if (!token) throw new Error("You must be logged");
    const { url } = COMMENT_POST(id);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error("It was not possible to comment.");
    const data = (await response.json()) as Comment;
    revalidateTag("comment");
    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
