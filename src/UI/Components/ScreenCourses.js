import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


export const ScreenCourses = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className='ScreenCourses'>
        <h3>EPET 20</h3>

        <button type="submit" className="Button">
          <Link to="/ScreenCoursesSection5" className="Link">
            <p>Quinto año 5°</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/ScreenCoursesSection6" className="Link">
            <p>Sexto año 6°</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
            <p>Inicio</p>
          </Link>
        </button><br /><br />
      </div>
    )
  )
}