import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main/Main";
import OurMenus from "../pages/OurMenus";
import Catering from "../pages/Catering";
import Faq from "../pages/Faq";
import HowItWork from "../pages/HowItWork";
import MealPlans from "../pages/MealPlans";
import Testimonials from "../pages/Testimonials";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/our-menus",
        element: <OurMenus />,
      },
      {
        path: "/catering",
        element: <Catering />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/how-it-work",
        element: <HowItWork />,
      },
      {
        path: "/meal-plans",
        element: <MealPlans />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

export default router;
