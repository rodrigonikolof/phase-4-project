import React, {useState} from 'react';
import {Typography, Button, Container, TextField, Box, MenuItem, FormControl, InputLabel} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function LoginForm ({onLogin}){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [errorFromServer, setErrorFromServer] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        username? setUsernameError(false) : setUsernameError (true)
        password? setPasswordError(false) : setPasswordError (true)
        if ( username && password ){
            console.log(username, password)
            fetch("/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json",},
                body: JSON.stringify({username, password})
            })
                .then((r)=>{
                    if(r.ok){
                        r.json().then((user)=>{onLogin(user)})
                    } else {
                        r.json().then((err)=> setErrorFromServer(err.errors));
                    }
                })
            
        }
    }

    return(
        <Container>
            <Typography 
                variant="h5" 
                component="h2" 
                color="textSecondary"
                gutterBottom
            >
                Login
            </Typography>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                noValidate
            >

                <TextField 
                    onChange={(e)=>{setUsername(e.target.value)}}
                    label="Username"    
                    fullWidth
                    required 
                    sx={{marginBottom: 1}}  
                    error={usernameError}  
                    value={username}        
                />
                <TextField 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    label="Password"  
                    type="password"  
                    fullWidth
                    required 
                    sx={{marginBottom: 1}}  
                    error={passwordError}  
                    value={password}        
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default LoginForm;