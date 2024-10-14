import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import Home from "./pages/home/home";
import Experience from "./pages/myworks/experience";
import Minis from "./pages/myworks/minis";
import Projects from "./pages/myworks/projects";
import Notfound from "./pages/notfound/notfound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home className="bg-teal"/>,
	},
	{
		path: "/home",
		element: <Navigate to="/" replace />,
	},
	{
		path: "/experience",
		element: <Experience />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: "/project",
		element: <Navigate to="/projects" replace />,
	},
	{
		path: "/minis",
		element: <Minis />,
	},
	{
		path: "*", // Catch-all route
		element: <Notfound />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
