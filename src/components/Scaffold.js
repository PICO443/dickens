import React, { useState } from 'react'
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { Container, createTheme, CssBaseline, Toolbar } from "@mui/material";
import DickensAppBar from './DickensAppBar';
import DickensAppDrawer from './DickensAppDrawer';
import { Outlet } from 'react-router-dom';


export default function Scaffold() {
    const defaultTheme = createTheme();
    const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DickensAppBar
          open={open}
          setOpen={setOpen}
          toggleDrawer={toggleDrawer}
        />
        <DickensAppDrawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
