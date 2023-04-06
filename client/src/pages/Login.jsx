import React, { useState } from "react";
import LoginForm from '../components/LoginForm'
import SignUpForm from "../components/SignUpForm";




function Login({onLogin}){


    return (
        <div>
            <LoginForm/>
            <SignUpForm/>
        </div>
    )

}

export default Login;