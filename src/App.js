import Header from "./UI/Components/Header";
import Footer from "./UI/Components/Footer";
import React from "react";
import { Section } from "./UI/Components/Section";
import { ScreenCourses } from "./UI/Components/ScreenCourses";
import { ScreenCoursesSection5 } from "./UI/Components/ScreenCoursesSection5";
import { ScreenCoursesSection6 } from "./UI/Components/ScreenCoursesSection6";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SectionOne5 } from "./UI/Components/Sections/SectionOne5";
import { SectionTwo5 } from "./UI/Components/Sections/SectionTwo5";
import { SectionThree5 } from "./UI/Components/Sections/SectionThree5";
import { SectionOne6 } from "./UI/Components/Sections/SectionOne6";
import { SectionTwo6 } from "./UI/Components/Sections/SectionTwo6";
import { SectionThree6 } from "./UI/Components/Sections/SectionThree6";
import './UI/Styles/estilos.css'

function App() {
  return (
    <>
    <div className="Fondo">
      <Header></Header>
      <BrowserRouter>
      <Section></Section>
        <Routes>
          <Route exact path="/ScreenCourses" element={<ScreenCourses />} />
          <Route exact path="/ScreenCoursesSection5" element={<ScreenCoursesSection5 />} />
          <Route exact path="/ScreenCoursesSection6" element={<ScreenCoursesSection6 />} />
          <Route exact path="/SectionOne5" element={<SectionOne5 />} />
          <Route exact path="/SectionTwo5" element={<SectionTwo5 />} />
          <Route exact path="/SectionThree5" element={<SectionThree5 />} />
          <Route exact path="/SectionOne6" element={<SectionOne6 />} />
          <Route exact path="/SectionTwo6" element={<SectionTwo6 />} />
          <Route exact path="/SectionThree6" element={<SectionThree6 />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;