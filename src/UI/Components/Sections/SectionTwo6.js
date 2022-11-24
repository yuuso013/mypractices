import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import imgcasa from "../../Styles/img/imgcasa.png"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/FirebaseConfig"

export const SectionTwo6 = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }
  const [lista, setLista] = useState([])
    useEffect(() => {
      const getLista = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'alumnos62'))
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
    }, [lista])
  return (
    isAuthenticated && (
      <div className='Sections'>
        <h2>6° Año | 2do curso</h2>
        <div className='App-header'>
          {
            lista.map(list =>(
              <div key={list.id}>
                <p>Nombre: {list.nombre} Apellido: {list.apellido}</p>
              </div>
            ))
          }
          </div>
        <button type="submit" className="Button">
          <Link to="/Section" className="Link">
            <div className='imageninicio'>
              <img src={imgcasa} alt='Inicio' />
            </div>
          </Link>
        </button><br /><br />
      </div>
    )
  )
}