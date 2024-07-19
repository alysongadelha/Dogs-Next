import { LoginForgotForm } from "@/context/components/login/login-forgot-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot | Dogs",
  description: "Recover your password",
};

// one way to dynamically import files with browser api
export const dynamic = "force-dynamic";

const ForgotPage = () => {
  return (
    <div className="animeLeft">
      <h1 className="title">Forgot password?</h1>
      <LoginForgotForm />
    </div>
  );
};

export default ForgotPage;
