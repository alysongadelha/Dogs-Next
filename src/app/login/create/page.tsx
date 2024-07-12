import { LoginCreateForm } from "@/components/login/LoginCreateForm";
import { Metadata } from "next";

type CreatePageProps = {};

export const metadata: Metadata = {
  title: "Create your account",
  description: "Create your account in the Dogs website",
};

const CreatePage = (props: CreatePageProps) => {
  return (
    <div className="animeLef">
      <h1 className="title">Register</h1>
      <LoginCreateForm />
    </div>
  );
};

export default CreatePage;
