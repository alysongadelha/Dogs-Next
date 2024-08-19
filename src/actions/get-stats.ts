"use server";

import { STATS_GET } from "@/utils/api";
import ApiError from "@/utils/api-error";
import { cookies } from "next/headers";

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};

export default async function getStats() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("You must be logged");

    const { url } = STATS_GET();
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) throw new Error("Error when trying to get the data.");
    const data = (await response.json()) as StatsData[];
    return { data, ok: true, error: "" };
  } catch (error) {
    return ApiError(error);
  }
}
