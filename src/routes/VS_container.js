import { NavLink, Outlet } from "react-router-dom";

const VS_container = ({foodVS}) => {

  return (
      <div  className="side-nav-container">
          <nav className="side-nav">
          {foodVS
          .map(item => 
            <NavLink
            style={({isActive})=>{
              return {
                color: isActive?"#1443c2":""
              }}}
              to={`/vorspeise/${item.fields.name}`}
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

export default VS_container;