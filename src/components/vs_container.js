import { useParams } from "react-router-dom";

const VS_contianer = ({foodState}) => {

  const foodParam = useParams();
  
  return (
    <div>
      {
        foodState && foodState
        .filter(item => item.fields.name === foodParam.foodId)
        .map(item => (
          <div>
            <h2>Name: {item.fields.name}</h2>
            <img src={item.fields.picture.fields.file.url} alt="vs" />
            <p>Beschreibung: {item.fields.description}</p>
            <ul>
              {
                Object.keys(item.fields.ingredients)
                .map(ingredient => (
                  <li>{ingredient}: {item.fields.ingredients[ingredient]}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default VS_contianer;
