import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./Container";
import Home from "components/Home";
import MySpace from "components/profile/MySpace";
import Explore from "components/Explore";
import Movies from "components/Movies";

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
    },
    {
      path: "/in",
      element: <Container />,
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
