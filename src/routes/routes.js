import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/not-found";

const baseLayoutRoutes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "/",
        component: HomePage,
      },
    ],
  },
];

const routes = [
  {
    path: "*",
    component: NotFoundPage,
  },
  ...baseLayoutRoutes,
];

export { routes };
