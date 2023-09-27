// import React from 'react'

import { useEffect } from "react";
import { Outlet } from 'react-router-dom'

function PersistLogin() {
    const accessToken = false;
    const refreshToken = null;
    const loading = false;

    useEffect(() =>{
        function verifyRefreshToken() {
            try{
                //dispatch(refresAccessToken(refreshToken));
                console.log("Refreshing Access Token")
            } catch (error) {
                console.log("Error refreshing access token")
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