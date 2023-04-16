import React, {useState, useEffect} from "react";
import {Box, Typography} from '@mui/material'

export default function Courses(){
    const [courses, setCourses] = useState(null)

    const getCourses = async()=>{
        let response = await fetch("/courses")
        let data = await response.json()
        setCourses(data)
    }

    useEffect(()=>{
        if (courses === null){getCourses()}
        console.log(courses)
    })

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
                    Available Courses
                </Typography>
        </Box>
        </>
    )
}