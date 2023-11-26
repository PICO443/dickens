import React, { useState } from 'react';
import { Button, FormControl, TextField, Grid, Box } from '@mui/material';
// import { createCourse } from './api';

const CourseForm = () => {
  const [course, setCourse] = useState({ name: '', periodDays: 0, fee: 0 });

  const handleChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // createCourse(course)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            id="course-name" 
            label="Course Name" 
            name="name" 
            value={course.name} 
            onChange={handleChange} 
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={6}>
          <TextField 
            fullWidth 
            id="course-period" 
            label="Period Days" 
            name="periodDays" 
            value={course.periodDays} 
            onChange={handleChange} 
            type="number" 
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={6}>
          <TextField 
            fullWidth 
            id="course-fee" 
            label="Fee" 
            name="fee" 
            value={course.fee} 
            onChange={handleChange} 
            type="number" 
            variant="outlined" 
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="large" type="submit">
            Register Course
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseForm;
