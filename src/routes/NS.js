import { useId } from "react";


const NS = ({foodNS}) => {

  const GetId = () => {
    return useId();
  }
  return (
    foodNS && foodNS.filter(item => item.fields.art==="ns")
    .map(item => 
      <img src={item.fields.picture.fields.file.url} alt="nachspeise" />
    )
  );
}

export default NS;