import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterInfo } from "./util/router";

const router = createBrowserRouter(RouterInfo);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
