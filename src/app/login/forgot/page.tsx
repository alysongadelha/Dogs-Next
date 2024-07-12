import { Metadata } from "next";

type ForgotPageProps = {};

export const metadata: Metadata = {
  title: "Forgot | Dogs",
  description: "Recover your password",
};

const ForgotPage = (props: ForgotPageProps) => {
  return <div>Forgot</div>;
};

export default ForgotPage;
