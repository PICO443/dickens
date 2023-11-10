import DashboardPage from "./pages/DashboardPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Scaffold from "./components/Scaffold";
import RegisterStudentFormPage from "./pages/RegisterStudentFormPage";
import { ProvideAuth } from "./AuthContext";
import LoginPage from "./pages/LoginPage";
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
          path: "course",
          element: <StaffPage />,
        },
        
      ],
    },
  ]);

  return (
    <ProvideAuth>
      <RouterProvider router={router} />
    </ProvideAuth>
  );
}

export default App;
