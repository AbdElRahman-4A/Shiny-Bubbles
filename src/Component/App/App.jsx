import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "../../Component/Layout/Layout";
import Home from "../../Component/Home/Home";
import NotFound from "../../Component/NotFound/NotFound";
import { Offline, Online } from "react-detect-offline";
import AboutUs from "../AboutUs/AboutUs";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [{ index: "/home", element: <Home /> }],
    },
  ]);
  return (
    <>
      <Online>
        <RouterProvider router={routes} />
      </Online>

      <Offline>
        <div className="container bg-danger  d-flex align-items-center ">
          <div className="row w-100">
            <h1 className="text-center">You Are Offline</h1>
          </div>
        </div>
      </Offline>
    </>
  );
}

export default App;
