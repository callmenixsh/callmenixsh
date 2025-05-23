import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/home";
// import Experience from "./pages/myworks/experience";
// import Minis from "./pages/myworks/minis";
// import Projects from "./pages/myworks/projects";
import Notfound from "./pages/notfound/notfound";
import Blogs from "./pages/blogs/blogs";
import Test from "./components/techstack/techstack";
import ScrollToTop from "./ScrollToTop";
import Myworks from "./pages/myworks/myworks"; // Import Myworks here

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
    path: "/projects",
    element: (
		<Layout>
        <Myworks />
      </Layout>
    ),
  },
  {
    path: "/myworks",
    element: (
      <Layout>
        <Myworks />
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
        <Test />
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
