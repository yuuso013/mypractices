import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export const ScreenCoursesSection5 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }
  
  return (
    isAuthenticated && (
      <div className='ScreenCourses'>
        <h3>Quinto año (5°)</h3>

        <button type="submit" className="Button">
          <Link to="/SectionOne5" className="Link">
            <p>Sección "1"</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/SectionTwo5" className="Link">
            <p>Sección "2"</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/SectionThree5" className="Link">
            <p>Sección "3"</p>          
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
