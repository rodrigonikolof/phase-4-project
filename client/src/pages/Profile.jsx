import React from "react";
import { Box, Typography } from "@mui/material";

export default function Profile(){

return(
    <>
        <Box
        sx={{display: 'flex', justifyContent: 'center', mt: 3}}
        >
            
                <Typography
                    variant="h5" 
                    component="h2" 
                    color="textSecondary"
                    gutterBottom
                >
                    My Profile
                </Typography>
        </Box>
    </>
)

}