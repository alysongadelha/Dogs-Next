import { Feed } from "@/context/components/feed/Feed";
import getPhotos from "@/actions/get-photos";

export default async function Home() {
  const data = await getPhotos();

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
