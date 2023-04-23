import React from "react"
import { Box, Typography } from "@mui/material"

export default function Home({user}){
console.log(user)

return(
    <>
    <Box
        sx={{display: 'flex', justifyContent: 'center', mt: 3}}
        >
            <Typography
                    variant="h3" 
                    component="h2" 
                    color="textSecondary"
                    gutterBottom
                >
                    Welcome!
                </Typography>
        </Box>
        <Box
        sx={{display: 'flex', justifyContent: 'center', mt: 3}}
        >
            <Typography
                    variant="h5" 
                    component="h2" 
                    color="textSecondary"
                    gutterBottom
                >
                    {`We are so happy that you have joined us! Go and make the ${user.house.house_name} proud.`}
                </Typography>
        </Box>
    
    </>
)

}