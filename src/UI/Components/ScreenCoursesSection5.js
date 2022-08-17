import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export const ScreenCoursesSection5 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  
  return (
    isAuthenticated && (
      <>
        <h1>Quinto año (5°)</h1>

        <button type="submit">
          <Link to="/SectionOne5" className="botonSeccion">
            <p>Sección "1"</p>
          </Link>
        </button><br />
        <button type="submit">
          <Link to="/SectionTwo5" className="botonSeccion">
            <p>Sección "2"</p>
          </Link>
        </button><br />
        <button type="submit">
          <Link to="/SectionThree5" className="botonSeccion">
            <p>Sección "3"</p>          
          </Link>
        </button><br />
      </>
    )
  )
}
