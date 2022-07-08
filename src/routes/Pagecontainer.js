import { NavLink, Outlet } from "react-router-dom";

const Pagecontainer = () => {
  return (
    <div>
      <NavLink to="/"><h1>CookBook</h1></NavLink>
      <nav>
        <NavLink
         to="/hauptspeise"
         style={({isActive}) => {
          return {
            color: isActive?"orange":""
          }
         }}
        >Hauptspeise</NavLink> |{" "}
        
        <NavLink
         to="/vorspeise"
         style={({isActive}) => {
          return {
            color: isActive?"orange":""
          }
         }}
        >Vorpseise</NavLink> |{" "}

        <NavLink 
          to="/nachspeise"
          style={({isActive}) => {
            return {
              color: isActive?"orange":""
            }
          }}
        >Nachspeise</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Pagecontainer;