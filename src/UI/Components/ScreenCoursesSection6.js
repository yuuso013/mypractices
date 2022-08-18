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
      <>
        <h1>Sexto año (6°)</h1>
        
        <button type="submit" className="App-button-Section">
          <Link to="/SectionOne6">
            <p>Sección "1"</p>
          </Link>
        </button><br />
        <button type="submit" className="App-button-Sectionn">
          <Link to="/SectionTwo6">
            <p>Sección "2"</p>
          </Link>
        </button><br />
        <button type="submit" className="App-button-Section">
          <Link to="/SectionThree6">
            <p>Sección "3"</p>          
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

export default ScreenCoursesSection6