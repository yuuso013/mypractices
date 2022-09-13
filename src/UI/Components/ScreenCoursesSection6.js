import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import imgcasa from "../Styles/img/imgcasa.png"


export const ScreenCoursesSection6 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated && (
      <div className='ScreenCourses'>
        <h3>EPET 20 | Sexto año (6°)</h3>
        
        <button type="submit" className="Button">
          <Link to="/SectionOne6" className="Link">
            <p>Sección "1"</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/SectionTwo6" className="Link">
            <p>Sección "2"</p>
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/SectionThree6" className="Link">
            <p>Sección "3"</p>          
          </Link>
        </button><br /><br />
        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
          <div className='imageninicio'>
            <img class='img-fluid' src={imgcasa} alt='Inicio'/>
          </div>
          </Link>
        </button><br /><br />
      </div>
    )
  )
}

export default ScreenCoursesSection6