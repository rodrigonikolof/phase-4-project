import React, {useEffect, useState} from "react";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AddBoxIcon from '@mui/icons-material/AddBox';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function CourseCard({course, enrolments, user, setEnrolments}){
    const [expanded, setExpanded] = React.useState(false);
    const [enrolled, setEnrolled] = useState(false)
    const [newEnrolment, setNewEnrolment] = useState(null)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
  
useEffect(()=>{
    if(enrolments.find(enrolment => enrolment.course_id === course.id )){
        setEnrolled(true)
       }
},[])
   
const handleSignUp = ()=>{
  fetch('/enrolments',{
    method: 'POST',
    headers : { "Content-Type" : "application/json"}, 
    body: JSON.stringify({
      student_id : user.id,
      course_id : course.id
     }),
  }).then((r)=>{
    if (r.ok){
        r.json().then(data => {
          enrolments.push(data)
          setEnrolments(enrolments)
        })
        .then(() => setEnrolled(true))
        .then(()=>console.log(enrolments))
        
    }
  })
  
}

    return(
    <>

<Card sx={{ minWidth: 275, maxWidth: 800, mb:2}}>
      <CardHeader
        title={course.course_name}
        subheader={`${course.course_day} - Taught by ${course.course_teacher}`}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="sign-up">
         {enrolled? <FileDownloadDoneIcon disabled/> :  <AddBoxIcon onClick={handleSignUp} sx={{color:'skyblue'}}/>}
        </IconButton>
          <Typography>{enrolled? 'Enrolled' : 'Sign Up'}</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Overview:</Typography>
          <Typography paragraph>
            {course.course_description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
    </>
    )
}