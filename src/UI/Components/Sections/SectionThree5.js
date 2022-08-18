import React from 'react'
import { Link } from 'react-router-dom'

export const SectionThree5 = () => {
  return (
    <div className='Sections'>
        <h2>5° Año | 3er curso</h2>
    
        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
            <p>Inicio</p>
          </Link>
        </button><br /><br />
    </div>
  )
}