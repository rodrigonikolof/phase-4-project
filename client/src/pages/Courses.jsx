import React, {useState, useEffect} from "react";
import {Box, Typography, Grid} from '@mui/material'
import CourseCard from "../components/CourseCard";

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
                    Browse Available Courses
                </Typography>
        </Box>
        {courses? 
            <Box sx={{display: 'flex', justifyContent: 'center', mt:3}}>    
                <Box sx={{ml: 6, mr: 6}} >
                    <Grid container spacing={3}>
                        {courses.map((course)=>{

                            return (
                            <Grid item xs={12} md={6} lg={4} key={course.id}> 
                                <CourseCard course={course}  key={course.id}/>
                            </Grid>
                            )
                        })}

                    </Grid>
                </Box>
            </Box>
    :null}
        </>
    )
}