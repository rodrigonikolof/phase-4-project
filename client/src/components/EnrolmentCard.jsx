import React from "react"
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material"
import ConfirmationModal from "./ConfirmationModal"

export default function EnrolmentCard({course}){
    

    return(
        <Card sx={{ minWidth: 275, maxWidth: 800, mb:2}}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography> */}
                <Typography variant="h5" component="div">
                {course.course_name} 
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {course.course_day} - Taught by {course.course_teacher}
                </Typography>
                <Typography variant="body2">
                This is some description? Maybe? Dunno. 
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=><ConfirmationModal/>}>Delete Enrolment</Button>
            </CardActions>
    </Card>
    )
}