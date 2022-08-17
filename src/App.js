import Header from "./UI/Components/Header";
import Footer from "./UI/Components/Footer";
import React from "react";
import { ScreenCourses } from "./UI/Components/ScreenCourses";
import ScreenCoursesSection6 from "./UI/Components/ScreenCoursesSection6";
import { ScreenCoursesSection5 } from "./UI/Components/ScreenCoursesSection5";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Section } from "./UI/Components/Section";

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
      <Section></Section>
        <Routes>
          <Route exact path="/ScreenCourses" element={<ScreenCourses />} />
          <Route exact path="/ScreenCoursesSection5" element={<ScreenCoursesSection5 />} />
          <Route exact path="/ScreenCoursesSection6" element={<ScreenCoursesSection6 />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;