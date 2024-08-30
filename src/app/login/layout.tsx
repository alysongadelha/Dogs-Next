import "./login.css";

type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <main className="login">
      <div className="forms">{children}</div>
    </main>
  );
};

export default LoginLayout;
