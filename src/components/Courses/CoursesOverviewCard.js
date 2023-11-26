import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PieChartIcon from "@mui/icons-material/PieChart";
import RunCircleIcon from "@mui/icons-material/RunCircle";
import DoneIcon from "@mui/icons-material/Done";
import { Stack } from "@mui/material";
import { styled } from '@mui/system';
import CourseRegistrationForm from "./CourseRegisterationForm";
import CourseGrowthChart from "./CourseGrowthChart"
const InformationItem = ({ IconComponent, color, label, value }) => (
  <Grid item xs={6} sm={3}>
    <Box 
      display="flex" 
      alignItems="center" 
      sx={{ padding: '0.5rem', border: `1px solid ${color}`, borderRadius: '0.25rem' }}
    >
      <IconComponent sx={{ color: color, fontSize: "2rem" }} />
      <Box ml={2} display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="subtitle2" color="textSecondary" sx={{ fontSize: "0.9rem" }}>
          {label}
        </Typography>
        <Typography variant="body1" color="textPrimary" sx={{ fontSize: "1.2rem", fontWeight: 'bold' }}>
          {value}
        </Typography>
      </Box>
    </Box>
  </Grid>
);

const ThemedCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper, 
  display: "flex",
  flexDirection: "column",
}));

const CoursesOverviewCard = ({ total, ongoing, available, finished, setPendingUpdates }) => {
  return (
    <ThemedCard>
      <CardHeader
        title={
          <Typography 
            variant="h5" 
            color={theme => theme.palette.mode === 'light' ? 'textSecondary' : 'common.white'}
          >
            Courses Overview
          </Typography>
        }
        action={
          <CourseRegistrationForm setPendingUpdates={setPendingUpdates}/>
        }
      />
      <Stack direction="column">
        <Divider />
        <CardContent>
          <Stack direction="column" spacing={4}>
            <Grid container spacing={2}>
              <InformationItem
                IconComponent={PieChartIcon}
                color="#673ab7"
                label="Total"
                value={total}
              />
              <InformationItem
                IconComponent={RunCircleIcon}
                color="#f57c00"
                label="Ongoing"
                value={ongoing}
              />
              <InformationItem
                IconComponent={StarBorderIcon}
                color="#ffc107"
                label="Available"
                value={available}
              />
              <InformationItem
                IconComponent={DoneIcon}
                color="#4caf50"
                label="Finished"
                value={finished}
              />
            </Grid>
            <CourseGrowthChart />
          </Stack>
        </CardContent>
      </Stack>
    </ThemedCard>
  );
};


export default CoursesOverviewCard;
