import { NavLink, Outlet } from "react-router-dom";

const VS_container = ({foodVS}) => {

  return (
      <div style={{display: "flex"}}>
          <nav style={{
            padding: "1rem",
            marginTop: "3rem"
          }}>

          {foodVS.filter(item => item.fields.type==="vs")
          .map(item => 
            <NavLink
            style={({isActive})=>{
              return {
                display: "block", 
                margin: "1rem 0",
                color: isActive?"orange":""
              }}
              }
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