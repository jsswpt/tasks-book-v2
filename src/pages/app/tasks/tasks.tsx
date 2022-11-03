import { useParams } from "react-router-dom";

export const Tasks = () => {
  const { categoryid } = useParams();
  return <>{categoryid}</>;
};
