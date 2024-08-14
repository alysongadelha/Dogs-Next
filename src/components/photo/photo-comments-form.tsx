"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Comment } from "@/actions/get-photo";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./photo-comments-form.module.css";
import { ToSendIcon } from "@/icons/to-send-icon";
import { ErrorMessage } from "../helper/error-message";
import postComment from "@/actions/post-comment";

type Props = {
  single: boolean;
  id: number;
  setComments: Dispatch<SetStateAction<Comment[]>>;
};

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <ToSendIcon />
    </button>
  );
};

export const PhotoCommentsForm = ({ single, id, setComments }: Props) => {
  const [state, action] = useFormState(postComment, {
    ok: false,
    data: null,
    error: "",
  });

  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment("");
    }
  }, [state, setComments]);

  const [comment, setComment] = useState("");

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        cols={30}
        rows={10}
        placeholder="Comment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
};
