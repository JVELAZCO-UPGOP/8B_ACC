import React, { useState } from "react";
import Encabezado from './Encabezado';
import Fila from './Fila';
import './Tabla.css';
import './Encabezado.css';

function Tabla(){
    const[mascotas, setMascotas] = useState([
        {
            tipo: "Gato",
            nombre: "manchas",
            dueno: "Esteban",
        },
        {
            tipo: "Perro",
            nombre: "Tylarz",
            dueno: "John",
        },
    ]);

    const columnas =  mascotas.length > 0 ? Object.keys(mascotas[0]) : [];

    return(  
        <table className="table table-hover">          
          <Encabezado columnas={ columnas }/>  
            <tbody id="lista-mascotas">
                {""}
                {mascotas.map((mascota, index) => (
                    <Fila mascota = { mascota } index = { index }/>
                ))}
            </tbody>
        </table>
    );
}

export default Tabla;