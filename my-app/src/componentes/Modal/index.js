import React from "react";
import ModalHeader from "./ModalHeader";
import Select from "../Select";
import Input from "../Input";
import ModalFooter from "./ModalFooter";
import "./Modal.css";

const tiposMascota=[
    {valor:"Perro", etiqueta:"Perro"},
    {valor:"Gato", etiqueta:"Gato"},
    {valor: "Pájaro", etiqueta:"Pájaro"},
    {valor: "Otro", etiqueta:"Otro"}
]

const duenos=[
    {valor:"Esteban", etiqueta:"Esteban"},
    {valor:"Julian", etiqueta:"Julian"},
    {valor: "John", etiqueta:"John"},
    {valor: "Felix", etiqueta:"Felix"},
    {valor: "Pepe", etiqueta:"Pepe"},
    {valor: "Camila", etiqueta:"Camila"},
    {valor: "Yoss", etiqueta:"Yoss"},
    {valor: "Pedro", etiqueta:"Pedro"},
    {valor: "Logan", etiqueta:"Logan"},
]

function Modal({ 
    cambiarModal =()=>{},
    manejarInput = ()=>{},
    crearEntidad = () =>{},
    objeto = {} 
}){
    return(
        <>
        <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader cambiarModal = { cambiarModal }/>
                    <div className="modal-body">
                        <form id="form">
                            <div className="row">
                                <div className="col">
                                  <Select 
                                   options={tiposMascota}
                                   nombreCampo="tipoMascota"
                                   onChange={manejarInput}
                                   placeHolder="Tipo Animal"
                                   value={objeto.tipo}
                                   />
                                </div>
                            </div>

                            <div className="row2">
                                <div className="col">
                                    <div className="mb-3">
                                        <Input 
                                          tipo="text" 
                                          nombreCampo="nombre"
                                          onInput={manejarInput}
                                          placeHolder="Nombre"
                                          value={objeto.nombre}
                                          />
                                    </div>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col">
                                    <Select 
                                     options={duenos}
                                     nombreCampo="dueno"
                                     onChange={manejarInput}
                                     placeHolder="Dueño"
                                     value={objeto.dueno}
                                     />
                                </div>
                            </div>
                        </form>
                    </div>

                    <ModalFooter 
                      cambiarModal = { cambiarModal }
                      crearEntidad = { crearEntidad }/>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show"></div>
        </>
    );
}

export default Modal