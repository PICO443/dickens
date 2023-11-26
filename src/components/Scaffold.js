import React, { useState } from "react";
import { Box } from "@mui/system";
// import { ThemeProvider } from "@mui/system";
import { Container, createTheme, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import DickensAppBar from "./DickensAppBar";
import DickensAppDrawer from "./DickensAppDrawer";
import { Outlet } from "react-router-dom";
import { darkTheme, lightTheme } from "../theme";


export default function Scaffold() {


  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
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
              <Outlet />
          </Box>
      </Box>
  );
}
