import React from 'react';
import { Link } from 'react-router-dom';

export const SectionOne6 = () => {
  return (
    <div>
        <h2>6° Año | 1er curso</h2>
        <button type="submit" className="App-button-Course">
          <Link to="/ScreenCourses">
            <p>Inicio</p>
          </Link>
        </button>
    </div>
  )
}