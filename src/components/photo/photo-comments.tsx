"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./photo-comments.module.css";
import { useUser } from "@/context/user-context";
import { PhotoCommentsForm } from "./photo-comments-form";
import { Comment } from "@/actions/get-photo";

type Props = {
  single: boolean;
  id: number;
  comments: Comment[];
};

export const PhotoComments = ({ single, id, comments }: Props) => {
  const [commentsState, setCommentsState] = useState(() => comments);
  const commentsSection = useRef<HTMLUListElement>(null);
  const { user } = useUser();

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [commentsState]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {commentsState.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={single}
          id={id}
          setComments={setCommentsState}
        />
      )}
    </>
  );
};
