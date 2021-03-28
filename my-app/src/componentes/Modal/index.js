import React from "react";

function Modal(){
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
    
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nueva Mascota</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div className="modal-body">
                        <form id="form">
                            <input type="hidden" id="indice"/>
                            <div className="row">
                                <div className="col">
                                    <select id="tipo" className="form-select" aria-label="Default select example">
                                    <option selected>Tipo de Animal</option>
                                    <option>Perro</option>
                                    <option>Gato</option>
                                    <option>Pajaro</option>
                                    <option>Otro</option>
                                </select>
                                </div>
                            </div>
    
                            <div className="row2">
                                <div className="col">
                                    <div class="mb-3">
                                        <input id="nombre" type="text" className="form-control" placeholder="Nombre"/>
                                    </div>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col">
                                    <select id="dueno" className="form-select" aria-label="Default select example">
                                        <option selected>Dueño</option>
                                        <option>Esteban</option>
                                        <option>Julian</option>
                                        <option>John</option>
                                        <option>Felix</option>
                                        <option>Pepe</option>
                                        <option>Camila</option>
                                        <option>Yoss</option>
                                        <option>Pedro</option>
                                        <option>Logan</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="btn-guardar">Crear</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal