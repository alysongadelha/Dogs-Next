"use client";
import { PhotoContent } from "../photo/photo-content";
import { PhotoData } from "@/actions/get-photo";
import styles from "./feed-modal.module.css";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

type Props = {
  photo: PhotoData;
};

export const FeedModal = ({ photo }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("photo")) return null;

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) router.back();
  };

  return (
    <div onClick={handleOutsideClick} className={styles.modal}>
      <PhotoContent data={photo} single={false} />;
    </div>
  );
};
