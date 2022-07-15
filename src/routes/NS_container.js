import { NavLink, Outlet } from "react-router-dom";



const NS_container = ({foodNS}) => {

  return (
      <div  className="side-nav-container">
        <nav className="side-nav">
        {foodNS.filter(item => item.fields.type==="ns")
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

export default NS_container;