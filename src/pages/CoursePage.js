import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {Box } from "@mui/material";
import CoursesTable from "../components/Courses/CoursesTable";
import { useEffect } from "react";
import { getAllCourses } from "../services/CourseService";
import CoursesOverviewCard from "../components/Courses/CoursesOverviewCard";

const CoursePage = () => {
  const [courses, setCourses] = useState(null)
  const [pendingUpdates, setPendingUpdates] = useState(null)

  useEffect(() => {
    async function getData(){
      const data = await getAllCourses()
      setCourses(data)
      setPendingUpdates(null)
      console.log(data)
      return data
    }
    getData()
  }, [pendingUpdates])

  
  return (courses == null)? null : (
    <Box p="16px">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <CoursesOverviewCard total={courses.length} ongoing={20} available={4} finished={50} setPendingUpdates={setPendingUpdates}/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CoursesTable courses={courses} setPendingUpdates={setPendingUpdates} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoursePage;
