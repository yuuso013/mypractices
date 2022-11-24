import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import imgcasa from "../Styles/img/imgcasa.png"
import goback from '../Styles/img/go_back.png'


export const ScreenCourses = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated && (
      <div className='ScreenCourses'>
        <h3>EPET 20</h3>

        <button type="submit" className="Button">
          <Link to="/ScreenCoursesSection5" className="Link">
            <p>Quinto año 5°</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/ScreenCoursesSection6" className="Link">
            <p>Sexto año 6°</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
            <div className='imageninicio'>
              <img src={imgcasa} alt='Inicio' />
            </div>
          </Link>
        </button>
        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
          <div className='imageninicio'>
            <img src={goback} alt='Inicio'/>
          </div>
          </Link>
        </button><br /><br />
      </div>
    )
  )
}