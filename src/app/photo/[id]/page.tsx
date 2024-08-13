import getPhoto from "@/actions/get-photo";
import { PhotoContent } from "@/components/photo/photo-content";
import { notFound } from "next/navigation";

type PhotoIdPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: PhotoIdPageProps) {
  const { data } = await getPhoto(id);

  if (!data)
    return {
      title: "Photos",
    };

  return {
    title: data.photo.title,
  };
}

const PhotoIdPage = async ({ params: { id } }: PhotoIdPageProps) => {
  const { data } = await getPhoto(id);
  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
};

export default PhotoIdPage;
