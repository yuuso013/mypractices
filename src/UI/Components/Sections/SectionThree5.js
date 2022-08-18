import React from 'react'
import { Link } from 'react-router-dom'

export const SectionThree5 = () => {
  return (
    <div>
        <h2>5° Año | 3er curso</h2>
    
        <button type="submit" className="App-button-Course">
          <Link to="/ScreenCourses">
            <p>Inicio</p>
          </Link>
        </button>
    </div>
  )
}