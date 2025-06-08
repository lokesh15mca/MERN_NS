import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup1 } from "./components/Signup1";
import { Dashboard } from "./components/Dashboard";
import { Home } from './components/Home';
import { AllCourse } from './components/AllCourse';
import { AddCourse } from './components/AddCourse';
import { AddStudents } from './components/AddStudents';
import { AllStudents } from './components/AllStudents';
// import { Collectfee } from './components/Collectfee';
// import { Paymenthistory } from './components/Paymenthistory';
import { CourseDetails } from './components/CourseDetails';


// export const myRouter = createBrowserRouter([
//   { path: "/", element: <Login /> },
//   { path: "/login", element: <Login /> },
//   { path: "/sign-in", element: <Signup1 /> },
//   { path: "/dashboard", element: <Dashboard />, children:[
//     {path: "", element: <Home />},
//     {path: "/allCourses", element: <AllCourse />},
//     {path: "/addCourse", element: <AddCourse />},
//     {path: "/addStudent", element: <AddStudents />},
//     {path: "/allStudent", element: <AllStudents />},
//     {path: "fee", element: <Collectfee />},
//     {path: "paymentHistory", element: <Paymenthistory />},
//   ] },
//   { path: "*", element: <div>Page not found!</div> }, // Handle 404s
// ]);

export const myRouter = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/login", Component: Login },
  { path: "/sign-in", Component: Signup1 },
  { 
    path: "/dashboard", 
    Component: Dashboard, 
    children: [
      { path: "home", Component: Home }, // Default child route
      { path: "allCourses", Component: AllCourse }, // Relative path
      { path: "addCourse", Component: AddCourse },
      { path: "addStudent", Component: AddStudents },
      { path: "allStudent", Component: AllStudents },
      // { path: "fee", Component: Collectfee },
      // { path: "paymentHistory", Component: Paymenthistory },
      { path: "courseDetails/:id", Component: CourseDetails },
      { path: "update-course/:id", Component: AddCourse },
    ] 
  },
  { path: "*", Component: () => <div>Page not found!</div> }, // Handle 404s with a function component
]);


function App() {
  
  return (
      <div className="App">
      {/* RouterProvider is here, this is the correct place */}
      <RouterProvider router={myRouter} />
      
    </div>
  );
}

export default App;
