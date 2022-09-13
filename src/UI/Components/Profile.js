import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import imgprofile1 from "../Styles/img/imgprofile1.jpeg";
import imgcompu from "../Styles/img/imgcompu.png";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated && (
      <div className="App-profile">
        <table className="table_profile">
          <tr className="tr_profile">
            <td className="td_profile">
              <div className="imgprofile1">
                <img src={imgprofile1} alt='imagenprofile1' />
              </div>
            </td>
            <td className="td_profile">
              <h2>¡Hola {user.name}! ¡Bienvenido/a a Mis Prácticas!</h2>
              <h2>Email del usuario: {user.email}</h2>
            </td>
            <td className="td_profile">
              <div className="imgprofile2">
                <img src={imgcompu} alt='imagenDeCompu' />
              </div>
            </td>
          </tr>
        </table >
      </div>



    )
  );
};