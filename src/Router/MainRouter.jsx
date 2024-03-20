import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ]
  },
]);

export default MainRouter;
