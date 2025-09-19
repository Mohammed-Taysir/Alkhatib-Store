import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import AuthLayout from "./layouts/AuthLayout";



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
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    }
]);
export default router;