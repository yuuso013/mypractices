import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="perfil"> 
        <h2>¡Hola {user.name}! ¡Bienvenido!</h2>
        <p>Email: {user.email}</p>
      </div>

    )
  );
};