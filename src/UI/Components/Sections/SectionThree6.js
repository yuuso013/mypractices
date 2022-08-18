import React from 'react'
import { Link } from 'react-router-dom'

export const SectionThree6 = () => {
  return (
    <div className='Sections'>
        <h2>6° Año | 3er curso</h2>
          
        <button type="submit" className="App-button-Redirect-Init">
          <Link to="/Section" className="App-link-Course">
            <p>Inicio</p>
          </Link>
        </button><br /><br />
    </div>
  )
}