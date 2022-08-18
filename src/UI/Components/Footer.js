import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Footer = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="Footer"> 
        <p>Síguenos en nuestras redes sociales. Instagram. Facebook. Twitter.</p>
      </div>

    )
  );
}

export default Footer