import React, { useState } from 'react';
import { Button, FormControl, TextField, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const CourseRegistrationForm = () => {
  const [course, setCourse] = useState({ name: '', periodDays: '', fee: '' });

  const handleChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://example.com/api/courses', course)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <StyledPaper>
          <form onSubmit={handleSubmit}>
            <FormControl margin="normal" fullWidth>
              <TextField label="Name" name="name" value={course.name} onChange={handleChange} />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <TextField label="Period Days" name="periodDays" type="number" value={course.periodDays} onChange={handleChange} />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <TextField label="Fee" name="fee" type="number" value={course.fee} onChange={handleChange} />
            </FormControl>

            <Button variant="contained" color="primary" type="submit" sx={{ margin: 3 }}>
              Submit
            </Button>
          </form>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default CourseRegistrationForm;