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
        <div>
            <p>Consultá tu lugar y horarios de pasante buscando en los siguientes cursos</p>
            
            <button type="submit" className="App-button-Courses">
                <Link to="/ScreenCourses">
                    <p>EPET 20 - Cursos</p>
                </Link>
            </button><br />
        </div>
    )
  )
}

export default Section