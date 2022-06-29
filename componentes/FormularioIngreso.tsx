import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Form } from 'react-native';
import { useForm } from "react-hook-form";

const Formulario = () => {

    const { register, handleSubmit } = useForm();

    return (
        <div>
            <h2>Formulario</h2>
            <form>

                <div>
                    <label htmlFor="">Cargo</label>
                    <select>
                        <option value="adm">Administrador</option>
                        <option value="tde">Tutor de empresa</option>
                        <option value="prof">Profesor</option>
                        <option value="est">Estudiante</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre"/>
                </div>

                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido"/>
                </div>

                <div>
                    <label htmlFor="dni">DNI</label>
                    <input type="number" name="dni"/>
                </div>

                <input type="submit" value="enviar"/>

            </form>

        </div>
    )
}

export default Formulario;