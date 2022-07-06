import { Link, Outlet } from "react-router-dom";

const Pagecontainer = () => {
  return (
    <div>
      <h1>CookBook</h1>
      <nav>
        <Link to="/hauptspeise">Hauptspeise</Link>  |{" "}
        <Link to="/vorspeise">Vorpseise</Link>  |{" "}
        <Link to="/nachspeise">Nachspeise</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Pagecontainer;