import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const root = document.getElementById("root");

if (!root) throw new Error("Root is not defined");

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
