import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "components/Home";
import MySpace from "components/MySpace";
import Explore from "components/Explore";
import Movies from "components/Movies";

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/in",
      element: <Main />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "mypage",
          element: <MySpace />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routers;
