import React from 'react'
import { Link } from 'react-router-dom'

export const ScreenCoursesSection5 = () => {
  return (
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
}
