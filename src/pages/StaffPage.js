import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import StaffOverviewCard from '../components/Staff/StaffOverviewCard';
import { getAllTeachers } from '../services/StaffService';
import StaffTable from '../components/Staff/StaffTable';

export default function StaffPage() {
  const [teachers, setTeachers] = useState(null)
  const [pendingUpdates, setPendingUpdates] = useState(null)

  useEffect(() => {
    async function getTeachers(){
      const apiResponse = await getAllTeachers()
      setTeachers(apiResponse)
      setPendingUpdates(null)
    }
    getTeachers()
  }, [pendingUpdates])

  return (teachers == null)? null : (
    <Box p="16px">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <StaffOverviewCard totalStaff={12} onDuty={5} offDuty={2} setPendingUpdates={setPendingUpdates}/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <StaffTable teachers={teachers} setPendingUpdates={setPendingUpdates}/>
        </Grid>
      </Grid>
    </Box>
  );
}
