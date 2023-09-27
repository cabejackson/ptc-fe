// import React from 'react'

// import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

function PublicOnlyRoute({ children } : any) {
    const accessToken = false;
    const loading = false;
    // const navigate = useNavigate();
    const location = useLocation();
    const fromLocation = (location.state)?.from;
    const previousLocation = location.state ? fromLocation : { pathname: "/login" }

    if(!accessToken && !loading) {
        return children;
    } else if (loading){
        return <p>Loading...</p>
    } else if (accessToken && !loading){
        // return <p>You are not logged in</p>;
        // navigate("/login")
        // navigate(previousLocation, { state: { from: location } });
        return < Navigate to={previousLocation} state={{from: location}} replace />;
    } else {
        return <p>Something went wrong!</p>
    }

}

export default PublicOnlyRoute