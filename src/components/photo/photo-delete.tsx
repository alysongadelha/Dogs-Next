"use client";

import { useState } from "react";
import styles from "./photo-delete.module.css";
import deletePhoto from "@/actions/delete-photo";
type Props = {
  id: string;
};

export const PhotoDelete = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const confirm = window.confirm("Are you sure you want to delete?");

    if (confirm) {
      await deletePhoto(id);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deleting
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Delete: {id}
        </button>
      )}
    </>
  );
};
