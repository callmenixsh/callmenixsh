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
import Topprojects from "./components/topprojects/topprojects";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => (
	<>
		<ScrollToTop />
		{children}
	</>
);

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{
		path: "/experience",
		element: (
			<Layout>
				<Experience />
			</Layout>
		),
	},
	{
		path: "/projects",
		element: (
			<Layout>
				<Projects />
			</Layout>
		),
	},
	{
		path: "/project",
		element: <Navigate to="/projects" replace />,
	},
	{
		path: "/minis",
		element: (
			<Layout>
				<Minis />
			</Layout>
		),
	},
	{
		path: "/blogs",
		element: (
			<Layout>
				<Blogs />
			</Layout>
		),
	},
	{
		path: "/test",
		element: (
			<Layout>
				<Topprojects />
			</Layout>
		),
	},
	{
		path: "*",
		element: (
			<Layout>
				<Notfound />
			</Layout>
		),
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
