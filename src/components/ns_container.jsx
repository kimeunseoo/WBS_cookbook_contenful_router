import { useParams } from "react-router-dom";

const NS_contianer = () => {

  const foodParam = useParams();

  return (
    <h1>{foodParam.foodId}</h1>
  );
}

export default NS_contianer;