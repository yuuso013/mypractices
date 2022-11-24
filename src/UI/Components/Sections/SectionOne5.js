import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import imgcasa from '../../Styles/img/imgcasa.png'
import goback from '../../Styles/img/go_back.png'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/FirebaseConfig";

export const SectionOne5 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }
  const [lista, setLista] = useState([])
    useEffect(() => {
      const getLista = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'alumnos51'))
          const docs = []
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
          })
          setLista(docs)
        } catch (error) {
          console.log(error)
        }
      }
      getLista()
      /*if (estado==true){
        lista.estado= "Actualmente está en pasantias"
      }else{
        lista.estado= "Actualmente no está en pasatias"
      }*/
    }, [lista])
  
  return (
    isAuthenticated && (
    <div className='Sections'>
        <h2>5° Año | 1er curso</h2>
        <div className='App-header'>
          {
            lista.map(list =>(
              <div key={list.id} className="fondo_alumnos_caja">
                <ul className='ul_alumnos'>
                <li className="fondo_alumnos_caja"><p className="fondo_alumnos">Nombre: {list.nombre} </p></li>
                <li className="fondo_alumnos_caja"><p className="fondo_alumnos">Apellido: {list.apellido}</p></li>
                <li className="fondo_alumnos_caja"><p className="fondo_alumnos">Lugar: {list.lugar}</p></li>
                </ul>
              </div>
            ))
          }
          </div>
        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
          <div className='imageninicio'>
            <img src={imgcasa} alt='Inicio'/>
          </div>
          </Link>
        </button>
        <button type="submit" className="Button">
          <Link to="/ScreenCoursesSection5" className="Link">
          <div className='imageninicio'>
            <img src={goback} alt='Inicio'/>
          </div>
          </Link>
        </button><br /><br />
    </div>
    )
  )
}