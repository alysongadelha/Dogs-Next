import { Feed } from "@/components/feed/feed";
import getPhotos from "@/actions/get-photos";
import Link from "next/link";

export default async function Home() {
  const { data } = await getPhotos();

  return (
    <section className="container mainContainer">
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
    </section>
  );
}
