type Props = {
  error: string | null;
};

export const ErrorMessage = ({ error }: Props) => {
  if (error === "" || error === null) return null;
  return <p style={{ color: "#f31", margin: "1rem 0" }}>{error}</p>;
};
