import { Link, Outlet } from "react-router-dom";

const VS = ({foodVS}) => {

  return (
    <div style={{display: "flex"}}>
        <nav style={{
          padding: "1rem",
          marginTop: "3rem"
        }}>

        {foodVS && foodVS.filter(item => item.fields.type==="vs")
        .map(item => (
          <Link
          style={{
            display: "block", margin: "1rem 0"}}
            to={`/vorspeise/${item.fields.name}`}
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

export default VS;