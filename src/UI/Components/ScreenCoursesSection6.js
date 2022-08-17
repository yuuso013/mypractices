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
        
        <button type="submit">
          <Link to="/SectionOne6" className="botonSeccion">
            <p>Sección "1"</p>
          </Link>
        </button><br />
        <button type="submit">
          <Link to="/SectionTwo6" className="botonSeccion">
            <p>Sección "2"</p>
          </Link>
        </button><br />
        <button type="submit">
          <Link to="/SectionThree6" className="botonSeccion">
            <p>Sección "3"</p>          
          </Link>
        </button><br />
      </>
    )
  )
}

export default ScreenCoursesSection6