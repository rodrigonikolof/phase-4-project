import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Box, Typography } from "@mui/material";
import LoginForm from '../components/LoginForm'
import SignUpForm from "../components/SignUpForm";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';




function Login({onLogin, houses}){

const [signUp, setSignUp] = useState(true)

const handleChange = (event, selection)=>{
    if (selection == null) {return 0}
     setSignUp(selection)
}

// console.log(signUp)
    return (
        <>
            <Box 
            sx={{display: 'flex', justifyContent: 'center', mt: 1}}
            >
                <EmojiEventsIcon fontSize="large" />
          
                <Typography
                    variant="h2"
                    noWrap
                    component="h2"
                    sx={{
                    mr: 4,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                 YOUDEMY
                </Typography>
            </Box>

            <Box 
            sx={{display: 'flex', justifyContent: 'center', mt: 1}}
            fullWidth
            >
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
                
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}} >  
                    <Box sx={{maxWidth:500}}>  
                        {signUp? <SignUpForm onLogin={onLogin} houses={houses}/>: <LoginForm onLogin={onLogin}/>}
                    </Box>  
                </Box> 
            
        </>      
        
    )

}

export default Login;