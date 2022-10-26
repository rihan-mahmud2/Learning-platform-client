import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CourseDetails from "../Others/CourseDetails";
import PremiumInfo from "../Others/PremiumInfo";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <h1>This is home</h1>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <PremiumInfo></PremiumInfo>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/course"),
      },
      {
        path: "/details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);
