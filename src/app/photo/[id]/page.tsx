type PhotoIdPageProps = {
  params: {
    id: number;
  };
};

const PhotoIdPage = ({ params: { id } }: PhotoIdPageProps) => {
  return <div>Photo id: {id}</div>;
};

export default PhotoIdPage;
