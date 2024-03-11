import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import SignUP from './Pages/Authentication/SignUp/SignUP';
import AuthProvider from './Provider/AuthProvider';
import AddFood from './Pages/AddFood/AddFood';
import AllFood from './Pages/AllFood/AllFood';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import MyAddedFood from './Pages/MyAddedFood/MyAddedFood';
import ErrorPage from './ErrorPage/ErrorPage';
import FoodPurchase from './Pages/FoodPurchase/FoodPurchase';
import MyOrder from './Pages/MyOrder/MyOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/addFood",
        element:<PrivateRoute><AddFood></AddFood></PrivateRoute>,
      },
      {
        path:"/allFood",
        element:<AllFood></AllFood>,
      },
      {
        path:"/foodDetails/:id",
        element:<FoodDetails></FoodDetails>,
      },
      {
        path:"/myAddedFood",
        element:<PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
      },
      {
        path: '/foodPurchase/:id',
        element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute> 
      },
      {
        path: '/myOrder',
        element: <MyOrder></MyOrder>
      }
    ],
  },
  {
    path:"/logIn",
    element:<LogIn></LogIn>,
  },
  {
    path:"/signUp",
    element:<SignUP></SignUP>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);