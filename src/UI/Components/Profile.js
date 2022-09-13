import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import imgprofile1 from "../Styles/img/imgprofile1.jpeg";
import imgprofile2 from "../Styles/img/imgprofile2.jpeg";

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
                <img src={imgprofile1} alt='imagenprofile1' />
              </div>
            </td>
            <td>
              <h2>¡Hola {user.name}! ¡Bienvenido/a a Mis Prácticas!</h2>
              <h2>Email del usuario: {user.email}</h2>
            </td>
            <td>
              <div className="imgepet2">
                <img src={imgprofile2} alt='imagenprofile2' />
              </div>
            </td>
          </tr>
        </table >
      </div>



    )
  );
};