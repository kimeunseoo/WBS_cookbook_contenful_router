import { NavLink, Outlet } from "react-router-dom";

const Pagecontainer = () => {
  return (
    <div className="main-div-container">
      <nav className="main-nav">
        <NavLink to="/"><h1 className="test">CookBook</h1></NavLink>

        <NavLink
        className="test"
          to="/hauptspeise"
          style={({isActive}) => {
          return {
            color: isActive?"orange":""
          }
          }}
        >
          Hauptspeise
        </NavLink> |{" "}
        
        <NavLink
          to="/vorspeise"
          style={({isActive}) => {
          return {
            color: isActive?"orange":""
          }
          }}
        >
          Vorpseise
        </NavLink> |{" "}

        <NavLink 
          to="/nachspeise"
          style={({isActive}) => {
            return {
              color: isActive?"orange":""
            }
          }}
        >
          Nachspeise
        </NavLink>
      </nav>
        <Outlet />
    </div>

  );
}

export default Pagecontainer;