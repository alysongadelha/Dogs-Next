"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../forms/button";
import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/error-message";
import { useState } from "react";
import styles from "./account-photo-post.module.css";
import postPhoto from "@/actions/post-photos";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Submitting...</Button>
      ) : (
        <Button>Post</Button>
      )}
    </>
  );
};

export const AccountPhotoPost = () => {
  const [state, action] = useFormState(postPhoto, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = useState("");

  const handleImgChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files) setImg(URL.createObjectURL(target.files[0]));
  };
  return (
    <section className={`${styles.postPhoto} animeLeft`}>
      <form action={action}>
        <Input label="Name" type="text" name="nome" />
        <Input label="Weight" type="number" name="peso" />
        <Input label="Age" type="number" name="idade" />
        <input
          onChange={handleImgChange}
          type="file"
          name="img"
          id="img"
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
};
