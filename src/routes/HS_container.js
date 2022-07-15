import { NavLink, Outlet } from "react-router-dom";

const HS_container = ({foodHS}) => {


  return (
      <div className="side-nav-container">
          <nav className="side-nav">

          {foodHS
          .map(item =>
            <NavLink
            style={({isActive}) =>{
              return {
                color: isActive?"#1443c2":""
              }}}
              to={`/hauptspeise/${item.fields.name}`}
              key={item.sys.id}
            >
              {item.fields.name}
            </NavLink>
          )}
          </nav>
          <Outlet />
        </div>
  )
}
      

export default HS_container;

