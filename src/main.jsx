import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from './pages/ProductsPage.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/:id",
    element: <ProductsPage />,
    children:[
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <RouterProvider router={router} >
    </RouterProvider>
  );
