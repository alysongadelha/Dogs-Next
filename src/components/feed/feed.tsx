"use client";
import getPhotos, { Photo } from "@/actions/get-photos";
import { FeedPhotos } from "./feed-photos";
import { useEffect, useRef, useState } from "react";

type Props = {
  photos: Photo[];
  user?: 0 | string;
};

export const Feed = ({ photos, user }: Props) => {
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(photos);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(photos.length > 6 ? false : true);

  const fetching = useRef(false);

  const infiniteScroll = () => {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  useEffect(() => {
    if (page === 1) return;

    const getPagePhotos = async (page: number) => {
      const actionData = await getPhotos(
        { page, total: 6, user },
        {
          cache: "no-store",
        }
      );
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...data, ...currentPhotos]);

        if (data.length < 6) setInfinite(false);
      }
    };

    getPagePhotos(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- user does not need to be verified
  }, [page]);

  return (
    <div>
      <FeedPhotos photos={photos} />
      {loading && <p>Loading...</p>}
    </div>
  );
};
