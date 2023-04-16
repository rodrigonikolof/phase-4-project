import React, {useState, useEffect} from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import EnrolmentCard from "../components/EnrolmentCard"

export default function MyEnrolments({user}){
    const [enrolments, setEnrolments] = useState(null)
   

// console.log(user)


    // useEffect(()=>{
    //     fetch("/enrolments").then((r)=> {
    //         if (r.ok){
    //         r.json().then((enrolment)=> setEnrolments(enrolment))
    //         .then(()=>console.log(enrolments))
    //         }
    //     }).catch((err)=>console.log(err))
    //     console.log(enrolments)
    // },[])

    const getEnrolments = async()=>{
        let response = await fetch("/enrolments")
        let data = await response.json()
        setEnrolments(data)
    }


useEffect(()=>{
    if (enrolments === null){getEnrolments()}
    // else {console.log(enrolments)}
})

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
        {enrolments ? 
        <Box sx={{display: 'flex', justifyContent: 'center', mt:3}}>
            <Box sx={{ml: 3, mr: 3}} >
                    <Grid container spacing={3}>
                        {enrolments.map((enrolment)=>{
                            
                            return(
                            <Grid item xs={12} md={6} key={enrolment.id}> 
                                <EnrolmentCard enrolment={enrolment} key={enrolment.id}/>
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