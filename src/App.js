import Header from "./UI/Components/Header";
import ScreenCourses from "./UI/Components/ScreenCourses";
import { ScreenCoursesSection5 } from "./UI/Components/ScreenCoursesSection5";
import { ScreenCoursesSection6 } from "./UI/Components/ScreenCoursesSection6";
import "./UI/Components/Styles/estilos.css"
import React from "react";

function App() {
  return (
    <div>
      <Header></Header>
      <ScreenCourses></ScreenCourses>
      <ScreenCoursesSection5></ScreenCoursesSection5>
      <ScreenCoursesSection6></ScreenCoursesSection6>
    </div>
  );
}

export default App;