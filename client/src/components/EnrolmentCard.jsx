import React from "react"
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material"


import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    minWidth: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function EnrolmentCard({enrolment, handleDelete}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    // console.log(enrolment)

    

    return(
        <>
        <Card sx={{ minWidth: 275, maxWidth: 800, mb:2}}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography> */}
                <Typography variant="h5" component="div">
                {enrolment.course.course_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {enrolment.course.course_day} - Taught by {enrolment.course.course_teacher}
                </Typography>
                <Typography variant="body2">
                This is some description? Maybe? Dunno. 
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpen}>Cancel Enrolment</Button>
            </CardActions>
    </Card>

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Cancel Enrolment?
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, mb:2 }}>
              Cancelling your enrolment will increase your student loan regardless (out of spite).
            </Typography>
            <Button sx={{mr:3}} onClick={()=>handleDelete(enrolment.id)}>Cancel Enrolment</Button>
            <Button onClick={handleClose}>Stay Enrolled</Button>
          </Box>
        </Fade>
      </Modal>

    </>
    )
}