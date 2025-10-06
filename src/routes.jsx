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

import AuthLayout from "./layouts/AuthLayout";
import ForgetPassword from "./pages/forget-password/ForgetPassword";
import ResetPassword from "./pages/reset-password/ResetPassword";
import ProtectRouter from "./protected/ProtectRouter";
import Profile from "./pages/profile/Profile";
import Info from "./pages/profile/Info";
import Orders from "./pages/profile/Orders";
import Settings from "./pages/profile/Settings";
import OrderTypeContextProvider from "./context/OrderTypeContext";
import OrderContextProvider from "./context/OrderContext";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },

            {
                path: '/cart',
                element: <ProtectRouter>
                    <Cart />
                </ProtectRouter>
            },
            {
                path: '/checkout',
                element: <ProtectRouter>
                    <Checkout />
                </ProtectRouter>
            },
            {
                path: '/shop/:page',
                element: <OrderContextProvider>
                    <OrderTypeContextProvider>
                        <Shop />
                    </OrderTypeContextProvider>
                </OrderContextProvider>
            },
            {
                path: '/product/:id',
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
                path: '/profile',
                element: <ProtectRouter>
                    <Profile />
                </ProtectRouter>,
                children: [
                    {
                        index: true,
                        element: <Info />
                    },
                    {
                        path: 'orders',
                        element: <Orders />
                    },
                    {
                        path: 'settings',
                        element: <Settings />
                    }
                ]
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
            },
            {
                path: '/auth/forget',
                element: <ForgetPassword />
            },
            {
                path: '/auth/reset',
                element: <ResetPassword />
            }
        ]
    }
]);
export default router;