import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const Section = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Cargando...</div>;
    }

  return (
    isAuthenticated && (
        <div className='Section'>
            <p>Consultá tu lugar y horarios de pasante buscando en los siguientes cursos</p>
            
            <button type="submit" className="App-button-Courses">
                <Link to="/ScreenCourses" className="App-link-Course">
                    <p>EPET 20 - Cursos</p>
                </Link>
            </button><br />
        </div>
    )
  )
}

export default Section