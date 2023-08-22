import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import { createBrowserRouter} from "react-router-dom";
import Login from "./Components/Login.jsx";
import { RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
