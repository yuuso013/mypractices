import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


export const ScreenCourses = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (

    <>
        <h1>EPET 20</h1>
        <Link to="/ScreenCoursesSection5" className="botonSeccion">
          <p>QUINTO AÑO</p>
        </Link>
        <Link to="/ScreenCoursesSection6" className="botonSeccion">
          <p>SEXTO AÑO</p>
        </Link>

    </>
    )
  )
}