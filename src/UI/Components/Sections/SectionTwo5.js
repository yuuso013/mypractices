import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const SectionTwo5 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }
  return (
    isAuthenticated && (
    <div className='Sections'>
        <h2>EPET 20 | 5° Año | 2do curso</h2>

        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
            <p>Inicio</p>
          </Link>
        </button><br /><br />
    </div>
    )
  )
}