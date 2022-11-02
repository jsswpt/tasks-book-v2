import { useParams } from "react-router-dom";

export const Tasks = () => {
  const { categoryId } = useParams();
  return <>{categoryId}</>;
};
