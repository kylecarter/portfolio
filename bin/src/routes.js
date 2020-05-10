import Home from "./pages/home";
import FourOhFour from "./pages/fourohfour";

export const routes = [
  {
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "*",
        restricted: false,
        component: FourOhFour,
      },
    ],
  },
];
