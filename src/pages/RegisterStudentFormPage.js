import { Button, FormControl, Grid, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { registerStudent } from "../services/StudentService";

export default function RegisterStudentFormPage() {
  const [student, setStudent] = useState({
    name: "",
    address: {
      current: "",
      permanent: ""
    },
    phoneNumber: "",
    DateOfBirth: "",
    qualifications: "",
    appliedCourses: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'current' || name === 'permanent'){
      setStudent(prevState => ({
        ...prevState,
        address: { ...prevState.address, [name]: value }
      }));
    }else{
      setStudent(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      registerStudent(student)
    } catch (err) {
      // Handle the error here
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    <TextField name="name" value={student.name} onChange={handleChange} label="Name" required />
    <TextField name="phoneNumber" value={student.phoneNumber} onChange={handleChange} label="Phone Number" required />
    <TextField name="DateOfBirth" type="date" value={student.DateOfBirth} onChange={handleChange} label="Date of Birth" InputLabelProps={{ shrink: true }} required />
    <TextField name="current" value={student.address.current} onChange={handleChange} label="Current Address" required />
    <TextField name="permanent" value={student.address.permanent} onChange={handleChange} label="Permanent Address" required />

    <FormControl required>
      <Select
        name="qualifications"
        value={student.qualifications}
        onChange={handleChange}
      >
        <MenuItem value={'SCHOOL'}>School</MenuItem>
        <MenuItem value={'MIDDLE_SCHOOL'}>Middle School</MenuItem>
        <MenuItem value={'SECONDARY_SCHOOL'}>Secondary School</MenuItem>
        <MenuItem value={'UNIVERSITY'}>University</MenuItem>
      </Select>
    </FormControl>

    <Button type="submit">Submit</Button>
  </form>
  );
}
