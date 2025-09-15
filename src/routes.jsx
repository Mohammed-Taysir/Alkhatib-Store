import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index:true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }, 
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/shop',
                element: <Shop />
            }, 
            {
                path: '/product',
                element: <Product />
            }
        ]
    }
]);
export default router;