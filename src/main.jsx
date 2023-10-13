import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import PrivateRoute from './component/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/',
                element: <PrivateRoute/>,
                children: [
                    {
                        path: '/quiz',
                        element: <Quiz />,
                    },
                    {
                        path: '/result',
                        element: <Result />,
                    }
                ]
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
