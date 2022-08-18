import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


export const ScreenCourses = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <h1>EPET 20</h1>

        <button type="submit" className="App-button-Course">
          <Link to="/ScreenCoursesSection5">
            <p>Quinto año 5°</p>
          </Link>
        </button><br />
        <button type="submit" className="App-button-Course">
          <Link to="/ScreenCoursesSection6">
            <p>Sexto año 6°</p>
          </Link>
        </button><br />
        <button type="submit" className="App-button-Redirect-Init">
          <Link to="/Section">
            <p>Inicio</p>
          </Link>
        </button><br />
      </>
    )
  )
}