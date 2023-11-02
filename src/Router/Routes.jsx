import { createBrowserRouter } from 'react-router-dom';
import Main from '../Leayout/Main';
import Home from '../Pages/Home/Home/Home';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Login from '../Pages/Home/Login/Login';
import SignUp from '../Pages/Home/SignUP/SignUp';
import Bookings from '../Pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-doctors-server-eight.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    }
])

export default Routes;