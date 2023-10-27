import { createBrowserRouter } from 'react-router-dom';
import Main from '../Loayout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Home/Login/Login';
import SignUp from '../Pages/Home/SignUP/SignUp';

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