import { useParams } from "react-router-dom";

const HS_contianer = ({foodState}) => {
  const foodParam = useParams();
  console.log(foodState);

  return (
    <div>
      {foodState && foodState
      .filter(item => item.fields.name === foodParam.foodId)
      .map(item => (
        <div>
          <h2>{item.fields.name}</h2>
          <img src={item.fields.picture.fields.file.url} alt="hs" />
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
  )

}

export default HS_contianer;