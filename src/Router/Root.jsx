import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Products from '../Components/Products/Products';
import Main from '../Layout/Main';
import About from "../Components/About/About"
import Error from '../error/Error';
import Order from '../Components/OrderReview/Order';
import { loadData } from '../Loader/Loader';
const Root = () => {
    const router = createBrowserRouter([
        {
            path: '/', 
            element: <Main></Main>,
            children: [
                { path: '/', element: <Banner /> },
                { path: '/home', element: <Banner /> },
                { path: '/shop', element: <Products /> },
                {
                    path: 'orders',
                    loader:loadData,
                    element: <Order />,
                    errorElement: <Error></Error>
                },
                { path: 'about', element: <About /> }

            ]
        },


    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Root;