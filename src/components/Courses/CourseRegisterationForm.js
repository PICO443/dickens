import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { registerCourse } from '../../services/CourseService';

const schema = yup.object().shape({
  name: yup.string().required("Course Name is required."),
  fee: yup.number().required("Fee is required.")
    .typeError("Fee must be a number.").positive("Fee must be a positive number."),
  periodDays: yup.number().required("Duration is required.")
    .typeError("Duration must be a number.")
    .positive("Duration must be a positive number."),
});

const CourseRegistrationForm = ({setPendingUpdates}) => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset()
    setOpen(false);
  };

  const onSubmit = (data) => {
    registerCourse(data)
    setPendingUpdates(data)
    console.log({data});
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Register Course
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box display="flex" alignItems="center" color="primary.main">
            <SchoolIcon /> <Box ml={1}>Course Registration</Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="text.secondary">
            Register a new course here.
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mt={2}>
              <TextField
                autoFocus
                margin="dense"
                {...register("name")}
                label="Course Name"
                type="text"
                fullWidth
                InputProps={{
                  startAdornment: <SchoolIcon color="action" />,
                }}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                margin="dense"
                {...register("fee")}
                label="Fee"
                type="number"
                fullWidth
                InputProps={{
                  startAdornment: <MonetizationOnIcon color="action" />,
                }}
                error={!!errors.fee}
                helperText={errors.fee?.message}
              />
              <TextField
                margin="dense"
                {...register("periodDays")}
                label="Course Duration (days)"
                type="number"
                fullWidth
                InputProps={{
                  startAdornment: <CalendarTodayIcon color="action" />,
                }}
                error={!!errors.periodDays}
                helperText={errors.periodDays?.message}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleClose} color="error">Cancel</Button>
              <Button type="submit" variant="contained" color="primary">Register</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseRegistrationForm;
