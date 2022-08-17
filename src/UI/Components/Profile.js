import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="App-profile"> 
        <h2>¡Hola {user.name}! ¡Bienvenido! Puedes buscar tu lugar de pasantía</h2>
        <h2>Email: {user.email}</h2>
      </div>

    )
  );
};