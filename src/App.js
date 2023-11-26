import DashboardPage from "./pages/DashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Scaffold from "./components/Scaffold";
import RegisterStudentFormPage from "./pages/RegisterStudentFormPage";
import { ProvideAuth } from "./AuthContext";
import LoginPage from "./pages/LoginPage";
import CoursePage from "./pages/CoursePage";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import StaffPage from "./pages/StaffPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Scaffold />,
      children: [
        {
          path: "Dashboard",
          element: <DashboardPage />,
        },
        {
          path: "register_student",
          element: <RegisterStudentFormPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "courses",
          element: <CoursePage />,
        },
        {
          path: "staff",
          element: <StaffPage />,
        },
      ],
    },
  ]);

  const [theme, setTheme] = useState(lightTheme);
  // const theme = createTheme()

  const toggleTheme = () => {
    setTheme(theme.palette.mode === "light" ? darkTheme : lightTheme);
  };

  return (
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default App;
