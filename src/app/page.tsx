import Image from "next/image";
import styles from "./page.module.css";
import { Feed } from "@/components/feed/Feed";
import getPhotos from "@/actions/getPhotos";

export default async function Home() {
  const data = await getPhotos();

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
