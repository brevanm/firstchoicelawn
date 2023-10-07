import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/service/:name", element: <div>Service</div> },
      { path: "*", element: <div>404</div> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
