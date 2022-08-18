import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const Section = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading...</div>;
    }

  return (
    isAuthenticated && (
        <div className='Section'>
            <h3>¡Consultá tu lugar y horarios de pasante buscando en los siguientes cursos!</h3>
            
            <button type="submit" className="Button">
                <Link to="/ScreenCourses" className="Link">
                    <p>EPET 20 - Cursos</p>
                </Link>
            </button><br />
        </div>
    )
  )
}

export default Section