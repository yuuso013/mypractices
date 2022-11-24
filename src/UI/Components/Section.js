import React from 'react'
import { Link, /*useNavigate*/ } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const Section = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  //const navigate = useNavigate()

  if (isLoading) {
    return <div></div>;
  }
  /*
<button type="submit" className="Button" onClick={()=> navigate('/ScreenCourses')}>IASFOAIS
</button><br />
*/
  return (
    isAuthenticated && (
      <div className='Section'>
        <h3>¡Consultá tu lugar y horarios de pasante buscando en los siguientes cursos!</h3>

        <button type="submit" className="Button">
        <Link to="/ScreenCourses" className="Link">
          <p>EPET 20 - Cursos</p>
        </Link>
        </button>
      </div>
    )
  )
}

export default Section