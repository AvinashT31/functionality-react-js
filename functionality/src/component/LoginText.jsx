import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

function LoginText() {

    const { state, login, logout } = useContext(AuthContext);
    console.log(state, "state here")

    function loginhere(){
        const userData = {user:"Avinash"}
        login(userData)
    }

    function logouthere(){
        logout();
    }

    return (
        <div>
            {/* <p>user here - {state.user} </p> */}
            <h1>user - {state.user?.user}</h1>
            <button onClick={loginhere}>Login</button>
            <button onClick={logouthere}>Logout</button>
        </div>
    )
}
export default LoginText;