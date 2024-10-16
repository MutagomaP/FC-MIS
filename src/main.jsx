import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/superAdmin/dashboard/Header.jsx";
import LoginPage from "./components/superAdmin/dashboard/Login.jsx";
import Clubs from "./components/superAdmin/football clubs/clubs.jsx";
import Settings from "./components/superAdmin/settings/settings.jsx";

const router = createBrowserRouter([
  { path: "/", 
    element: <LoginPage />
   },
   {
    path: '/dashboard',
    element: <App/>
   },
   {
    path: '/clubs',
    element: <Clubs/>
   },
   {
    path: '/settings',
    element: <Settings/>
   }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
