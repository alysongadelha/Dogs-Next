import { Metadata } from "next";

type AccountPageProps = {};

export const metaData: Metadata = {
  title: "My Account",
};

const AccountPage = (props: AccountPageProps) => {
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
};

export default AccountPage;
