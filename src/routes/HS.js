import { Link, Outlet } from "react-router-dom";
const HS = ({foodHS}) => {


  return (
    <div style={{display: "flex"}}>
        <nav style={{
          borderRight: "solid 1px",
          padding: "1rem",
          marginTop: "3rem"
        }}>

        {foodHS && foodHS.filter(item => item.fields.art==="hs")
        .map(item => (
          <Link
          style={{
            display: "block", margin: "1rem 0"}}
            to={`/hauptspeise/${item.fields.name}`}
            key={item.sys.id}
          >
            {item.fields.name}
          </Link>
        ))}

        </nav>
        <Outlet />
      </div>
  )
}
      

export default HS;

