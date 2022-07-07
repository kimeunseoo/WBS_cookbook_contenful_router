import { useParams } from "react-router-dom";

const VS_contianer = () => {

  const foodParam = useParams();
  
  return (
    <h1>{foodParam.foodId}</h1>
  );
}

export default VS_contianer;
