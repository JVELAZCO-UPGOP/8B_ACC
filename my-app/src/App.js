import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import './App.css';
import Pagina from './Pagina';

function App() {
  return(
    <div className="container">
      <Nav/>
      <Switch>
        <Route 
         path="/" 
         component={()=> <Pagina          
         titulo="Mascotas" 
         entidad="mascotas"/>} />
        <Route 
         path="/veterinarias" 
         component={()=> <Pagina          
         titulo="Veterinarias" 
         entidad="veterinarias"/>} />
        <Route 
         path="/duenos" 
         component={()=> <Pagina          
         titulo="Dueños" 
         entidad="duenos"/>} />
        <Route 
         path="/consultas" 
         component={()=> <Pagina          
         titulo="Consultas" 
         entidad="consultas"/>} />      
     </Switch>
     </div>
  );
}

export default App;
