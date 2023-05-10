import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Layout from "./components/Layout/Layout";
import Success from "./pages/Success/Success";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { path: "/products/:id", element: <Products /> },

      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
