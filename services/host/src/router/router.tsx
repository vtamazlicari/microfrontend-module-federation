import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
import shopRoutes from "shop/router";
import adminRoutes from "admin/router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...shopRoutes, ...adminRoutes],
  },
]);
