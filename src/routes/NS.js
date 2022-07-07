import { NavLink, Outlet } from "react-router-dom";



const NS = ({foodNS}) => {

  return (
    <div style={{display: "flex"}}>
      <nav style={{
          padding: "1rem",
          marginTop: "3rem"
        }}>
      {foodNS && foodNS.filter(item => item.fields.type==="ns")
      .map(item =>
        <NavLink
        style={({isActive}) =>{
          return {
            display: "block", 
            margin: "1rem 0",
            color: isActive?"orange":"",
          }
        }}
          to={`/nachspeise/${item.fields.name}`}
          key={item.sys.id}
        >
          {item.fields.name}
        </NavLink>
      )}
      </nav>
      <Outlet />
    </div>
  );
}

export default NS;