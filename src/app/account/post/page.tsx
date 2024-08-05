import { AccountPhotoPost } from "@/context/components/account/account-photo-post";
import { Metadata } from "next";

type PostPageProps = {};

export const metaData: Metadata = {
  title: "Posts | My Account",
};

const PostPage = (props: PostPageProps) => {
  return (
    <div>
      <AccountPhotoPost />
    </div>
  );
};

export default PostPage;
