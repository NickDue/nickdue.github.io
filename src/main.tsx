import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import TitleBar from "./components/TitleBar.tsx";
import Contact from "./pages/Contact.tsx";
import Projects from "./pages/Projects.tsx";
import Resume from "./pages/Resume.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/resume",
        element: <Resume />,
    }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <TitleBar />
      <RouterProvider router={router} />
  </React.StrictMode>,
)
