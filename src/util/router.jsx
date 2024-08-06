import AppContent from "../components/AppContent";
import ProjectInfo from "../pages/DetailProject";
import Forbidden from "../pages/ForbiddenPage";
import NotFoundPage from "../pages/NotFoundPage";
import Root from "../pages/Root";

export const RouterInfo = [
  {
    element: <Root />,
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: "/", element: <AppContent /> },
      { path: "/forbidden", element: <Forbidden /> },
      { path: "/projects/:id", element: <ProjectInfo /> },
    ],
  },
];
