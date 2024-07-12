"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../forms/Button";
import { Input } from "../forms/Input";
import { ErrorMessage } from "../helper/errorMessage";
import { useEffect } from "react";
import styles from "./LoginForm.module.css";
import userPost from "@/actions/userPost";

type Props = {};

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Submitting...</Button>
      ) : (
        <Button>Sign up</Button>
      )}
    </>
  );
};

export const LoginCreateForm = (props: Props) => {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/profile";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="User" type="text" name="username" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};
