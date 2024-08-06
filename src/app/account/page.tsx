import getPhotos from "@/actions/get-photos";
import getUser from "@/actions/get-user";
import { Feed } from "@/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";

type AccountPageProps = {};

export const metadata: Metadata = {
  title: "My Account",
};

const AccountPage = async (props: AccountPageProps) => {
  const { data: user } = await getUser();
  const { data } = await getPhotos({ user: user?.username });

  return (
    <section>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
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
    </section>
  );
};

export default AccountPage;
