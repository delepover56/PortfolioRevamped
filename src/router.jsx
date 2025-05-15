import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/aboutMe";
import MyWork from "./pages/myWork";
import Resume from "./pages/myResume";
import HireMe from "./pages/hireMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // ✅ This is the main layout
    children: [
      {
        index: true, // ✅ This means "default route"
        element: <AboutMe />, // ✅ Loads AboutMe by default
      },
      {
        path: "aboutMe",
        element: <AboutMe />,
      },
      {
        path: "myResume",
        element: <Resume />,
      },
      {
        path: "myWork",
        element: <MyWork />,
      },
      {
        path: "hireMe",
        element: <HireMe />,
      },
    ],
  },
]);

export default router;
