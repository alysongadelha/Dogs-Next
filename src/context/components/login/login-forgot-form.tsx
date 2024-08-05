"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../forms/button";
import { Input } from "../forms/input";
import { ErrorMessage } from "../helper/error-message";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Sending...</Button>
      ) : (
        <Button>Send email</Button>
      )}
    </>
  );
};

export const LoginForgotForm = () => {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  // one way to dynamically import files with browser api
  //   const [url, setUrl] = useState("");
  //   useEffect(() => {
  //     setUrl(`${window.location.href.replace("forgot", "reset")}`);
  //   }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / User" type="text" name="login" />
        <input
          type="hidden"
          name="url"
          value={`${window.location.href.replace("forgot", "reset")}`}
          //   value={url}
        />
        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: "#4c1" }}>Email submitted!</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
};
