import getPhotos from "@/actions/get-photos";
import getUser from "@/actions/get-user";
import { Feed } from "@/context/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";

type AccountPageProps = {};

export const metaData: Metadata = {
  title: "My Account",
};

const AccountPage = async (props: AccountPageProps) => {
  const { data: user } = await getUser();
  const { data } = await getPhotos({ user: user?.username });
  console.log("data", data);
  return (
    <div>
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            No photos found
          </p>
          <Link
            href={"/account/post"}
            className="button"
            style={{ display: "inline-block" }}
          >
            Post photo
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
