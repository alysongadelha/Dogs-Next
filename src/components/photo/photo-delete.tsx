type Props = {
  id: string;
};

export const PhotoDelete = ({ id }: Props) => {
  return <button>Delete: {id}</button>;
};
