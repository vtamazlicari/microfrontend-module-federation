import { Link, Outlet } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

export const App = () => {
  return (
    <div>
      <h1>SHOP MODULE</h1>
      <div>
        <Link to={shopRoutes.second}>go to second page</Link>
      </div>
      <Outlet />
    </div>
  );
};
