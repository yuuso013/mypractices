import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import imgcasa from "../../Styles/img/imgcasa.png"

export const SectionTwo6 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }
  return (
    isAuthenticated && (
      <div className='Sections'>
        <h2>6° Año | 2do curso</h2>

        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
            <div className='imageninicio'>
              <img src={imgcasa} alt='Inicio' />
            </div>
          </Link>
        </button><br /><br />
      </div>
    )
  )
}