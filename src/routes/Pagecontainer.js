import { NavLink, Outlet } from "react-router-dom";

const Pagecontainer = () => {
  return (
    <>
      <nav className="main-nav">
        <NavLink to="/"><h1>CookBook</h1></NavLink>

        <NavLink
          to="/hauptspeise"
          style={({isActive}) => {
          return {
            color: isActive?"#1443c2":""
          }
          }}
        >
          Hauptspeise
        </NavLink> |{" "}
        
        <NavLink
          to="/vorspeise"
          style={({isActive}) => {
          return {
            color: isActive?"#1443c2":""
          }
          }}
        >
          Vorpseise
        </NavLink> |{" "}

        <NavLink 
          to="/nachspeise"
          style={({isActive}) => {
            return {
              color: isActive?"#1443c2":""
            }
          }}
        >
          Nachspeise
        </NavLink>
      </nav>
        <Outlet />
    </>

  );
}

export default Pagecontainer;