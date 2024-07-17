"use client";
import { useUser } from "@/context/userContext";

type AccountPageProps = {};

const AccountPage = (props: AccountPageProps) => {
  const { user } = useUser();
  console.log("data", user);
  return (
    <div>
      <h1>Account: {user?.nome}</h1>
    </div>
  );
};

export default AccountPage;
