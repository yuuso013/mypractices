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

import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import methodOverride from "method-override";
import flash from "connect-flash";
import passport from "passport";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { MONGODB_URI, PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import notesRoutes from "./routes/notes.routes.js";
import userRoutes from "./routes/auth.routes.js";
import "./config/passport.js";

// Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", PORT);
app.set("views", join(__dirname, "views"));

// config view engine
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGODB_URI }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// routes
app.use(indexRoutes);
app.use(userRoutes);
app.use(notesRoutes);

// static files
app.use(express.static(join(__dirname, "public")));

app.use((req, res) => {
  res.render("404");
});




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
          <Route exact path="/SectionOne5" element={<SectionOne5 />} />
          <Route exact path="/SectionTwo5" element={<SectionTwo5 />} />
          <Route exact path="/SectionThree5" element={<SectionThree5 />} />
          <Route exact path="/SectionOne6" element={<SectionOne6 />} />
          <Route exact path="/SectionTwo6" element={<SectionTwo6 />} />
          <Route exact path="/SectionThree6" element={<SectionThree6 />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;