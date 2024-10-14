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
import Blogs from "./pages/blogs/blogs";

const router = createBrowserRouter([
	{
		path: "/callmenixsh",
		element: <Home/>,
	},
	{
		path: "/",
		element: <Navigate to="/callmenixsh" replace />,
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
		path: "/blogs",
		element: <Blogs />,
	},
	{
		path: "*",
		element: <Notfound />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
