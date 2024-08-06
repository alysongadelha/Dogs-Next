import { AccountPhotoPost } from "@/components/account/account-photo-post";
import { Metadata } from "next";

type PostPageProps = {};

export const metadata: Metadata = {
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
