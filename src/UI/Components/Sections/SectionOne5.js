import React from 'react';
import { Link } from 'react-router-dom';

export const SectionOne5 = () => {
  return (
    <div className='Sections'>
        <h2>5° Año | 1er curso</h2>
        
        <button type="submit" className="App-button-Redirect-Init">
          <Link to="/Section" className="App-link-Course">
            <p>Inicio</p>
          </Link>
        </button><br /><br />
    </div>
  )
}