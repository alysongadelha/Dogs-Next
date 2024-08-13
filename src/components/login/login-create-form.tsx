"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../forms/button";
import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/error-message";
import { useEffect } from "react";
import styles from "./login-form.module.css";
import postUser from "@/actions/user-post";

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

export const LoginCreateForm = () => {
  const [state, action] = useFormState(postUser, {
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
