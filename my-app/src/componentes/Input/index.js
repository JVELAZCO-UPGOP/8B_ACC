import React from "react";
import "./Input.css";

function Input({tipo ="texto", nombreCampo}){
    return(
        <input 
        id={nombreCampo}
        type={tipo} 
        className="form-control" 
        placeholder={nombreCampo}/>
    );
}

export default Input
