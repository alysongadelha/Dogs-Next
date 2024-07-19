import { Photo } from "@/actions/get-photos";
import { FeedPhotos } from "./feed-photos";

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
