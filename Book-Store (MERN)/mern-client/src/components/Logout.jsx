import React, { useContext } from "react";
import { useCallback } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Logout=()=>{
    const {logOut}=useContext(AuthContext);
    const location= useLocation();
const navigate=useNavigate();

    const handleLogout=()=>{
        logOut().then(() => {
            // Sign-out successful.
            alert("Sign Out Successful");
            navigate(from,{replace: true})

          }).catch((error) => {
            // An error happened.
          });
          
    }
    return(
        <div className="h-screen bg-teal-100 flex items-center justify-center">
            <button className="bg-red-500 px-8 py-2 text-white rounded" onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Logout;