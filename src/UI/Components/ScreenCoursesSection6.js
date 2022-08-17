import React from 'react'
import { Link } from 'react-router-dom'

export const ScreenCoursesSection6 = () => {
  return (
    <>
        <h1>Sexto año (6°)</h1>
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

export default ScreenCoursesSection6