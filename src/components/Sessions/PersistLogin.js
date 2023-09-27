// import React from 'react'

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom'
import { refreshAccessToken } from "./sessionSlice"

function PersistLogin() {
    const accessToken = useSelector((state) => state.session.accessToken);
    const refreshToken = useSelector((state) => state.session.refreshToken);
    const loading = useSelector((state) => state.session.loading);
    const dispatch = useDispatch();

    useEffect(() =>{
        function verifyRefreshToken() {
            try{
                dispatch(refreshAccessToken(refreshToken));
                // console.log("Refreshing Access Token")
            } catch (error) {
                // console.log("Error refreshing access token")
                console.log(error)
            }
        }
        if(!accessToken){
            verifyRefreshToken();
        }
    }, [accessToken, refreshToken]);

    return (
        <>
            {loading ? <p>Loading ...</p> : <Outlet /> }
        </>
    )
    
}

export default PersistLogin