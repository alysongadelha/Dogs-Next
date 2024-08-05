"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../forms/button";
import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/error-message";
import styles from "./login-form.module.css";
import passwordReset from "@/actions/password-reset";

type Props = {
  keyToken: string;
  login: string;
};

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Submitin...</Button>
      ) : (
        <Button>Reset Password</Button>
      )}
    </>
  );
};

export const LoginResetForm = ({ keyToken, login }: Props) => {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="New Password" type="text" name="login" />
        <input type="hidden" name="key" value={keyToken} />
        <input type="hidden" name="login" value={login} />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};
