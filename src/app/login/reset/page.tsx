import { LoginResetForm } from "@/components/login/login-reset-form";
import { Metadata } from "next";

type Props = {
  searchParams: {
    key: string;
    login: string;
  };
};

export const metadata: Metadata = {
  title: "Reset | Dogs",
  description: "Reset your password",
};

const ResetPage = ({ searchParams }: Props) => {
  return (
    <div className="animeLeft">
      <h1 className="title">Reset password</h1>
      <LoginResetForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
};

export default ResetPage;
