type UserProfilePageProps = {
  params: {
    user: string;
  };
};

const UserProfilePage = ({ params: { user } }: UserProfilePageProps) => {
  return <div>UserProfile {user}</div>;
};

export default UserProfilePage;
