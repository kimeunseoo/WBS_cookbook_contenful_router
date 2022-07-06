import { useId } from "react";

const HS = ({foodHS}) => {

  const GetId = () => {
    return useId();
  }

  return (
    foodHS && foodHS.filter(item => item.fields.art==="hs")
    .map(item => {
      const id = GetId();
      return <img key={id} src={item.fields.picture.fields.file.url} />
    }
  ))
      


}

export default HS;

