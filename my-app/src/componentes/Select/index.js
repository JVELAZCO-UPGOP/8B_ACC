import React from "react";
import "./Select.css";

function Select({options=[], nombreCampo = "vacio"}){
    return(
        <select id="tipo" className="form-select" aria-label="Default select example">
            <option value = "">Seleccione {nombreCampo}</option>
            {options.map(({valor,etiqueta}, index)=>(
              <option key={`${nombreCampo}-${index}-${valor}-${etiqueta}`} value = {valor}>{etiqueta}</option>))}
        </select>
    );
}

export default Select