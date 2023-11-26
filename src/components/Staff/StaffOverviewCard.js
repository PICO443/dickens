import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import { Grid, Stack } from "@mui/material";
import { styled } from '@mui/system';
import TeacherRegistrationForm from "./TeacherRegisterationForm";
import { InformationItem } from "../_Common/InformationItem";

const ThemedCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper, 
  display: "flex",
  flexDirection: "column",
}));

const StaffOverviewCard = ({ totalStaff, onDuty, offDuty, departments, setPendingUpdates }) => {
  return (
    <ThemedCard>
      <CardHeader
        title={
          <Typography 
            variant="h5" 
            color={theme => theme.palette.mode === 'light' ? 'textSecondary' : 'common.white'}
          >
            Staff Overview
          </Typography>
        }
        action={<TeacherRegistrationForm  setPendingUpdates={setPendingUpdates}/>}
      />
      <Stack direction="column">
        <Divider />
        <CardContent>
          <Stack direction="column" spacing={4}>
            <Grid container spacing={2}>
              <InformationItem
                IconComponent={PeopleIcon}
                color="#673ab7"
                label="Total Staff"
                value={totalStaff}
              />
              <InformationItem
                IconComponent={WorkIcon}
                color="#f57c00"
                label="On Duty"
                value={onDuty}
              />
              <InformationItem
                IconComponent={WorkIcon}
                color="#ffc107"
                label="Off Duty"
                value={offDuty}
              />
              {/* {departments.map((department, index) => (
                <InformationItem
                  key={index}
                  IconComponent={WorkIcon} // You can use a department-specific icon here
                  color="#3f51b5" // Choose a color specific to each department
                  label={department.name} // Department name
                  value={department.staffCount} // Number of staff in the department
                />
              ))} */}
            </Grid>
            {/* Add more components specific to staff team */}
          </Stack>
        </CardContent>
      </Stack>
    </ThemedCard>
  );
};

export default StaffOverviewCard;
