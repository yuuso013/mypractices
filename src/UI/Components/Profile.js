import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import epet20 from "../Styles/img/epet20.png";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated && (
      <div className="App-profile">
        <table>
          <tr>
            <td>
              <div className="imgepet1">
                <img src={epet20} alt='Epet20_imagen' />
              </div>
            </td>
            <td>
              <h2>¡Hola {user.name}! ¡Bienvenido/a a Mis Prácticas!</h2>
              <h2>Email del usuario: {user.email}</h2>
            </td>
            <td>
              <div className="imgepet2">
                <img src={epet20} alt='Epet20_imagen' />
              </div>
            </td>
          </tr>
        </table >
      </div>



    )
  );
};