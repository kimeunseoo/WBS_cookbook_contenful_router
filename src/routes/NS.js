import { Link, Outlet } from "react-router-dom";



const NS = ({foodNS}) => {

  return (
    <div style={{display: "flex"}}>
      <nav style={{
          borderRight: "solid 1px",
          padding: "1rem",
          marginTop: "3rem"
        }}>
      {foodNS && foodNS.filter(item => item.fields.art==="ns")
      .map(item =>
        <Link
        style={{
          display: "block", margin: "1rem 0"}}
          to={`/nachspeise/${item.fields.name}`}
          key={item.sys.id}
        >
          {item.fields.name}
        </Link>
      )}
      </nav>
      <Outlet />
    </div>
  );
}

export default NS;