import { useParams } from "react-router-dom";

const HS_element = ({foodState}) => {
  const foodParam = useParams();

  return (
    <div>
      {
      foodState
      .filter(item => item.fields.name === foodParam.foodId)
      .map(item => (
        <div>
          <h2>{item.fields.name}</h2>
          <img src={item.fields.picture.fields.file.url} alt="hs" />
          <p>{item.fields.description}</p>
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

export default HS_element;