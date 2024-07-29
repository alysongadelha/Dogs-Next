import { AccountHeader } from "@/context/components/account/account-header";

type Props = {
  children: React.ReactNode;
};

const AccountLayout = ({ children }: Props) => {
  return (
    <div className="container">
      <AccountHeader />
      {children}
    </div>
  );
};

export default AccountLayout;
