import React, {useState, useEffect} from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import EnrolmentCard from "../components/EnrolmentCard"

export default function MyEnrolments({user}){
    const [enrolments, setEnrolments] = useState(null)
    const [loading, setLoading] = useState(true)

// console.log(user)


    useEffect(()=>{
        fetch(fetch("/enrolments").then((r)=> {
            if (r.ok){
            r.json().then((enrolment)=> setEnrolments(enrolment))
            .then(()=>console.log(enrolments))
            }
        })).catch((err)=>console.log(err))
        console.log('rendered')
    },[])





return (
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
                    {`My Enrolments`}
                </Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', mt:3}}>
            <Box sx={{ml: 3, mr: 3}} >
                    <Grid container spacing={3}>
                        {user.courses.map((course)=>{
                            
                            return(
                            <Grid item xs={12} md={6} key={course.id}> 
                                <EnrolmentCard course={course} key={course.id}/>
                            </Grid> 
                            ) 
                        })}
                    </Grid>
            </Box>
        </Box>
    </>
)

}