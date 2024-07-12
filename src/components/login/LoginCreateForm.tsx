"use client";
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../forms/Button";
import { Input } from "../forms/Input";
import { ErrorMessage } from "../helper/errorMessage";
import { useEffect } from "react";
import styles from "./LoginForm.module.css";

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
  const [state, action] = useFormState(login, {
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
        <Input label="Password" type="text" name="username" />
        <Input label="Email" type="email" name="email" />
        <Input label="User" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};
