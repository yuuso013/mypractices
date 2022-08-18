import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Footer = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="Footer"> 
        <h3>Síguenos en nuestras redes sociales. Instagram. Facebook. Twitter.</h3>
      </div>

    )
  );
}

export default Footer