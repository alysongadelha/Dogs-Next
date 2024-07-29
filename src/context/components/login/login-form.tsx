"use client";
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import { ErrorMessage } from "../helper/error-message";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./login-form.module.css";
import { Button } from "../forms/button";
import { Input } from "../forms/input";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Submitting...</Button>
      ) : (
        <Button>Sign in</Button>
      )}
    </>
  );
};

export const LoginForm = () => {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/account";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="User" type="text" name="username" />
        <Input label="Password" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link className={styles.forgot} href="/login/forgot">
        Forgot password?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Register</h2>
        <p>Do not have a account? Register in the site.</p>
        <Link className="button" href="/login/create">
          Registration
        </Link>
      </div>
    </>
  );
};
