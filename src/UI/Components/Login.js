import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div className="App-profile">Cargando... espere un momento por favor</div>;
  }

  return (
    <div className="App-header">
      <h1>Si desea ingresar a "Mis Prácticas" para observar su lugar de pasantía, inicie sesión</h1>
      <td className="td_profile">
              <div className="imgprofile2">
                <img src={logotipo_app} alt='imagenLogotipo' />
              </div>
            </td>
      <button className="Button" onClick={() => loginWithRedirect()}>Iniciar sesión</button>
    </div>
    
  )  
}; 