"use server";

import { PHOTO_GET } from "@/utils/api";
import ApiError from "@/utils/api-error";
import { Photo } from "./get-photos";

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

export default async function getPhoto(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ["photos", "comment"],
      },
    });
    if (!response.ok) throw new Error("Error when trying to get the photo.");
    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: "" };
  } catch (error) {
    return ApiError(error);
  }
}
