import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { IndexPage } from "./Pages/Index";
import { GenrePage } from "./Pages/Genre";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/genre/:genreId",
    element: <GenrePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
