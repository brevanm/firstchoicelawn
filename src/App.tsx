import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import Root from "./pages/Root";
import CareersPage from "./pages/CareersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/service/:name", element: <ServicePage /> },
      { path: "*", element: <div>404</div> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
