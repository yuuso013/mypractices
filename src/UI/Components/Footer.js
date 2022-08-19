import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Footer = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated && (
      <div className="Footer"> 
        <h3>Síguenos en nuestras redes sociales... 
          <a className='SocialMedia' href='https://www.instagram.com/epet20educacion/'>   Instagram   |   </a>
          <a className='SocialMedia' href="https://es-la.facebook.com/EPET20">Facebook   |   </a>
          <a className='SocialMedia' href="https://mobile.twitter.com/epet20educacion">Twitter</a>
        </h3>
      </div>

    )
  );
}

export default Footer