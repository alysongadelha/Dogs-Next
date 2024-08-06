import { LoginCreateForm } from "@/components/login/login-create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create your account",
  description: "Create your account in the Dogs website",
};

const CreatePage = () => {
  return (
    <div className="animeLef">
      <h1 className="title">Register</h1>
      <LoginCreateForm />
    </div>
  );
};

export default CreatePage;
