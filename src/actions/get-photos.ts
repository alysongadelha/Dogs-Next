"use server";

import { PHOTOS_GET } from "@/utils/api";
import ApiError from "@/utils/api-error";

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

type GetPhotosParams = { page?: number; total?: number; user?: 0 | string };

export default async function getPhotos({
  page = 1,
  total = 6,
  user = 0,
}: GetPhotosParams = {}) {
  try {
    const { url } = PHOTOS_GET({ page, total, user });
    const response = await fetch(url, {
      next: {
        revalidate: 10,
        tags: ["photos"],
      },
    });
    if (!response.ok) throw new Error("Error when trying to get photos.");
    const data = (await response.json()) as Photo[];
    return { data, ok: true, error: "" };
  } catch (error) {
    return ApiError(error);
  }
}
