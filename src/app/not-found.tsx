import Link from "next/link";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="container">
      <h1 className="title">Page not found</h1>
      <Link
        className="button"
        style={{ marginBottom: "1rem", display: "inline-block" }}
        href={"/"}
      >
        Back to home page.
      </Link>
    </div>
  );
};

export default NotFound;
