import React from 'react';
import { Link } from 'react-router-dom';

export const SectionTwo6 = () => {
  return (
    <>
        <h2>6° Año | 2do curso</h2>

        <button type="submit" className="App-button-Redirect-Init">
          <Link to="/ScreenCourses">
            <p>Inicio</p>
          </Link>
        </button><br />
    </>
  )
}