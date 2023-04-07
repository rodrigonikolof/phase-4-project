import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import LoginForm from '../components/LoginForm'
import SignUpForm from "../components/SignUpForm";




function Login({onLogin}){

const [signUp, setSignUp] = useState(true)

const handleChange = (event, selection)=>{
     setSignUp(selection)
}

console.log(signUp)
    return (
        <div>
            <ToggleButtonGroup
            value={signUp}
            exclusive
            onChange={handleChange}
            >
                <ToggleButton value={true}>
                    Sign Up
                </ToggleButton>
                <ToggleButton value={false}>
                    Login
                </ToggleButton>
            </ToggleButtonGroup>

            {signUp? <SignUpForm/>: <LoginForm/>}
            
            
        </div>
    )

}

export default Login;