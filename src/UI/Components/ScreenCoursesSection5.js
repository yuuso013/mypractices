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

          <Link to="/SecciónUno" className="botonSeccion">
            <p>Sección "1"</p>
          </Link>
          <Link to="/SecciónDos" className="botonSeccion">
            <p>Sección "2"</p>
          </Link>
          <Link to="/SecciónTres" className="botonSeccion">
            <p>Sección "3"</p>
          </Link>
      </>
    )
  )
}
