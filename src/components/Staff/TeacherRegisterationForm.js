import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import { registerTeacher } from '../../services/StaffService';

const Department = {
  COMPUTER: 'COMPUTER',
  ENGLISH: 'ENGLISH',
  ARABIC: 'ARABIC',
  CHEMISTRY: 'CHEMISTRY',
};

const schema = yup.object().shape({
  name: yup.string().required('Teacher Name is required.'),
  department: yup
    .string()
    .required('Department is required.')
    .oneOf(Object.values(Department), 'Invalid Department'),
});

const TeacherRegistrationForm = ({ setPendingUpdates }) => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = (data) => {
    setPendingUpdates({teacherData: data});
    registerTeacher(data)
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} startIcon={<AccountCircleIcon />}>
        Register Teacher
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <Box display="flex" alignItems="center" color="primary.main">
            <SchoolIcon fontSize="large" /> <Typography variant="h6" ml={1}>Teacher Registration</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="text.secondary">Register a new teacher here.</DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mt={2}>
              <TextField
                fullWidth
                label="Teacher Name"
                variant="outlined"
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
                InputProps={{
                  startAdornment: <AccountCircleIcon color="action" />,
                }}
              />
              <Box mt={2}>
                <FormControl fullWidth variant="outlined" error={!!errors.department}>
                  <InputLabel id="department-select-label" style={{ backgroundColor: 'white' }}>
                    <BusinessIcon color="action" />
                    Department
                  </InputLabel>
                  <Select
                    labelId="department-select-label"
                    id="department-select"
                    {...register('department')}
                    control={control}
                    style={{ backgroundColor: 'white' }}
                  >
                    {Object.values(Department).map((dept) => (
                      <MenuItem key={dept} value={dept}>
                        {dept}
                      </MenuItem>
                    ))}
                  </Select>
                  <p>{errors.department?.message}</p>
                </FormControl>
              </Box>
            </Box>
            <DialogActions>
              <Button onClick={handleClose} color="error">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeacherRegistrationForm;
