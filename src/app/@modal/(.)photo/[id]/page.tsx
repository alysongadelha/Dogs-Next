import getPhoto from "@/actions/get-photo";
import { FeedModal } from "@/components/feed/feed-modal";
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
  return <FeedModal photo={data} />;
};

export default PhotoIdPage;
