import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return <button onClick={() => loginWithRedirect()}>Inicie sesión</button>;
}; 