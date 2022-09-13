import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import imginstagram from "../Styles/img/imginstagram.png";
import imgfacebook from "../Styles/img/imgfacebook.png";
import imgtwitter from "../Styles/img/imgtwitter.png";

const Footer = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  return (
    isAuthenticated && (
      <div className="Footer"> 
        <h3>Síguenos en nuestras redes sociales... 
          <table className='table_footer'>
            <tr className='tr_footer'>
              <td className='td_footer'><a className='SocialMedia' href='https://www.instagram.com/epet20educacion/'><img className='imginstagram' src={imginstagram} alt='img_ig' /> </a></td>
              <td className='td_footer'><a className='SocialMedia' href="https://es-la.facebook.com/EPET20"><img className='imgfacebook' src={imgfacebook} alt='img_fb' /> </a></td>
              <td className='td_footer'><a className='SocialMedia' href="https://mobile.twitter.com/epet20educacion"><img className='imgtwitter' src={imgtwitter} alt='img_tw' /></a></td>
            </tr>
          </table>
        </h3>
      </div>

    )
  );
}

export default Footer