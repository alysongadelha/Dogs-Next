import { Photo } from "@/actions/getPhotos";
import { FeedPhotos } from "./FeedPhotos";

type Props = {
  photos: Photo[];
};

export const Feed = ({ photos }: Props) => {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
};
