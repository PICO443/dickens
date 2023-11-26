import { useTheme } from '@mui/material';
import React from 'react';

import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const data = [
  { month: 'Jan', courses: 70 },
  { month: 'Feb', courses: 200 },
  { month: 'Mar', courses: 140 },
  { month: 'Apr', courses: 370 },
  { month: 'May', courses: 220 },
  { month: 'Jun', courses: 250 },
  { month: 'Jul', courses: 300 },
  { month: 'Aug', courses: 400 },
  { month: 'Sep', courses: 330 },
  { month: 'Oct', courses: 350 },
  { month: 'Nov', courses: 440 },
  { month: 'Dec', courses: 500 },
];

const CourseGrowthChart = () => {
  const theme = useTheme()

  return (
    <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="courses" stroke={theme.palette.primary.main} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default CourseGrowthChart;
