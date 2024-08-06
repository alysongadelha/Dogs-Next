import { LoginForm } from "@/components/login/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Login in your account in the Dogs website",
};

const LoginPage = () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
