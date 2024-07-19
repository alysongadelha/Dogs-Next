"use client";
import { useUser } from "@/context/user-context";

type AccountPageProps = {};

const AccountPage = (props: AccountPageProps) => {
  const { user } = useUser();

  return (
    <div>
      <h1>Account: {user?.nome}</h1>
    </div>
  );
};

export default AccountPage;
