import { NavLink, Outlet } from "react-router-dom";


const NS_container = ({foodNS}) => {

  return (
      <div  className="side-nav-container">
        <nav className="side-nav">

        {foodNS
        .map(item =>
          <NavLink
          style={({isActive}) =>{
            return {
              color: isActive?"#1443c2":"",
            }}}
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