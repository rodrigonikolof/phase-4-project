import React, {useState, useEffect} from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import EnrolmentCard from "../components/EnrolmentCard"

export default function MyEnrolments({enrolments, setEnrolments}){
    
    // useEffect(()=>{
    //     fetch("/enrolments").then((r)=> {
    //         if (r.ok){
    //         r.json().then((enrolment)=> setEnrolments(enrolment))
    //         .then(()=>console.log(enrolments))
    //         }
    //     }).catch((err)=>console.log(err))
    //     console.log(enrolments)
    // },[])

const handleDelete = (id)=>{
    fetch(`/enrolments/${id}`, {
      method: 'DELETE',
    })
    setEnrolments(enrolments.filter(enrolment => enrolment.id != id))
  }

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
        {Array.isArray(enrolments) ? 
        <Box sx={{display: 'flex', justifyContent: 'center', mt:3}}>
            <Box sx={{ml: 6, mr: 6}} >
                    <Grid container spacing={3}>
                        {enrolments.map((enrolment)=>{
                            
                            return(
                            <Grid item xs={12} md={6}  key={enrolment.id}> 
                                <EnrolmentCard enrolment={enrolment} handleDelete={handleDelete} key={enrolment.id}/>
                            </Grid> 
                            ) 
                        })}
                    </Grid>
            </Box>
        </Box>
        : console.log(enrolments)}
    </>
)

}