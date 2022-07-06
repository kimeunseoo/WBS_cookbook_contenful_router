import { useId } from "react";

const VS = ({foodVS}) => {

  const GetId = () => {
    return useId();
  }

  return (
    foodVS && foodVS.filter(item => item.fields.art==="vs")
    .map((item) =>{
      const id = GetId();
      return (<img key={id} src={item.fields.picture.fields.file.url} alt="vs" />)  
    } 
    )
  );
}

export default VS;