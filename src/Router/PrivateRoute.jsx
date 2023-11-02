import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoute;