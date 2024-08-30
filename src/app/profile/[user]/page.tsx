import getPhotos from "@/actions/get-photos";
import { Feed } from "@/components/feed/feed";

type UserProfilePageProps = {
  params: {
    user: string;
  };
};

const UserProfilePage = async ({ params: { user } }: UserProfilePageProps) => {
  const { data } = await getPhotos({ user });

  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed photos={data} user={user} />
    </section>
  );
};

export default UserProfilePage;
