import React, {useState} from "react"
import {Typography, Button, Container, TextField, Box, MenuItem, FormControl, InputLabel, Select} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SignUpForm({onLogin}){

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [house, setHouse] = useState('')
    const [nameError, setNameError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [houseError, setHouseError] = useState(false)
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [passwordConfirmationError, setPasswordConfirmationError] = useState(false)
    const [errorFromServer, setErrorFromServer] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        name? setNameError(false) : setNameError(true)
        username? setUsernameError(false) : setUsernameError (true)
        password? setPasswordError(false) : setPasswordError (true)
        passwordConfirmation == password? setPasswordConfirmationError(false) : setPasswordConfirmationError(true)
        house? setHouseError(false) : setHouseError (true)

        if (name && username && password && house && passwordConfirmation == password){
            console.log(name, username, house, password)
            fetch('/signup',{
               method: 'POST',
               headers : { "Content-Type" : "application/json"}, 
               body: JSON.stringify({
                name,
                username,
                password,
                password_confirmation : passwordConfirmation,
                house_id : house
               }),
            }).then((r)=>{
                if (r.ok){
                    r.json().then((user) => onLogin(user));
                } else {
                    r.json().then((err)=>setErrorFromServer(err.errors))
                    .then(console.log(errorFromServer))
                }
            })
        }
    }


    return (
        <Container>
            <Typography 
                variant="h5" 
                component="h2" 
                color="textSecondary"
                gutterBottom
            >
                Sign Up
            </Typography>

            <form 
                onSubmit={handleSubmit}
                autoComplete="off"
                noValidate
            >
                <TextField 
                    onChange={(e)=>{setName(e.target.value)}}
                    label="Name"    
                    fullWidth
                    required 
                    sx={{marginBottom: 1}}  
                    error={nameError}  
                    value={name}        
                />
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

                <TextField 
                    onChange={(e)=>{setPasswordConfirmation(e.target.value)}}
                    label="Confirm Password"  
                    type="password"  
                    fullWidth
                    required 
                    sx={{marginBottom: 1}}  
                    error={passwordConfirmationError}  
                    value={passwordConfirmation}        
                />

                <FormControl fullWidth>
                    <InputLabel>Select Your House</InputLabel>
                    <Select
                        value={house}
                        label="House"
                        onChange={(e)=>{setHouse(e.target.value)}}
                        sx={{mb:1}}
                        required
                    error={houseError}
                    >
                        <MenuItem value={1} key={'1'}>Scaredy Cats</MenuItem>
                        <MenuItem value={2} key={'2'}>Frightened Bananas</MenuItem>
                    </Select>
                </FormControl>

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