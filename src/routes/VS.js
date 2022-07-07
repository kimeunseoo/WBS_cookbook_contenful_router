import { NavLink, Outlet } from "react-router-dom";

const VS = ({foodVS}) => {

  return (
    <div>
      <input 
        placeholder="Suche"
        type="text" />
      <div style={{display: "flex"}}>
          <nav style={{
            padding: "1rem",
            marginTop: "3rem"
          }}>

          {foodVS && foodVS.filter(item => item.fields.type==="vs")
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
    </div>
  )
}

export default VS;