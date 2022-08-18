import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


export const ScreenCoursesSection6 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    isAuthenticated && (
      <div className='ScreenCourses'>
        <h1>Sexto año (6°)</h1>
        
        <button type="submit" className="App-button-Section">
          <Link to="/SectionOne6" className="App-link-Course">
            <p>Sección "1"</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="App-button-Section">
          <Link to="/SectionTwo6" className="App-link-Course">
            <p>Sección "2"</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="App-button-Section">
          <Link to="/SectionThree6" className="App-link-Course">
            <p>Sección "3"</p>          
          </Link>
        </button><br /><br />
        <button type="submit" className="App-button-Redirect-Init">
          <Link to="/Section" className="App-link-Course">
            <p>Inicio</p>
          </Link>
        </button><br /><br />
      </div>
    )
  )
}

export default ScreenCoursesSection6