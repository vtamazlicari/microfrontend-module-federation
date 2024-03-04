import { Outlet } from "react-router-dom";
import { UserCard } from "@packages/shared/src/components/UserCard";

export const App = () => {
  return (
    <div>
      <h1>ADMIN MODULE</h1>
      <Outlet />
      <div style={{ color: "blue" }}>
        <h1>Second page</h1>
        <UserCard username="MY ADMIN USERNAME" />
      </div>
    </div>
  );
};
