import React, { useState } from "react";
import './ActionsMenu.css'
import Alert from '../Alert/index';

function ActionMenu(){
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const alertSwitch = () => setMostrarAlerta(!mostrarAlerta);

    return (
        <div className="actions-menu">
            <h3>Mascotas</h3>
            <div className="actions-menu-content"> 
                <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                onClick= { alertSwitch }>
                    Nuevo
                </button>
                { mostrarAlerta && <Alert alertSwitch={alertSwitch}/> }
            </div>
        </div>
    );
}

export default ActionMenu;