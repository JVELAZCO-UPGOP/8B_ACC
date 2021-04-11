import React, { Component } from "react";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import { listarEntidad, crearEditarEntidad, eliminarEntidad } from "./servicio";

class Pagina extends Component{
  constructor(props){
    super(props);
    this.state = {
      mostrarModal: false,
      entidades: [],
      objeto: {},
      idObjeto: null,
      method: "POST"
    };
  }

  cambiarModal = (_evento, method="POST") =>{
    this.setState({ mostrarModal: !this.state.mostrarModal, method})
  };

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    this.setState({ entidades });
  };

  manejarInput = (evento)=>{
    const { target: {value, name} } = evento;
    console.log({value, name, evento});
    let { objeto } = this.state;
    objeto = {...objeto, [name]: value };
    this.setState({ objeto });
  };

  crearEntidad = async ()=>{
    const { entidad } = this.props;
    let { objeto, method, idObjeto } = this.state;
    await crearEditarEntidad({ entidad, objeto, method, idObjeto })
    this.cambiarModal();
    this.listar();
  };

  editarEntidad = (_evento, index)=>{
    const objeto = {...this.state.entidades[index]};
    this.setState({objeto, idObjeto: index}, ()=>{
      this.cambiarModal(null, "PUT");
    });
  };

  eliminarEntidad = async (_evento, index)=>{
    const {entidad} = this.props;
    const respuesta = await eliminarEntidad({entidad, idObjeto: index})
    this.listar();
  }

  componentDidMount(){
    this.listar();
  }
  
  render(){
    const { titulo = "Página sin titulo" } = this.props;
    return (
      <div>    
       <ActionsMenu 
         manejarInput ={this.manejarInput} 
         cambiarModal = {this.cambiarModal} 
         titulo = {titulo} />
       <Tabla 
        entidades={this.state.entidades} 
        editarEntidad={this.editarEntidad}
        eliminarEntidad={this.eliminarEntidad} />
        {this.state.mostrarModal && 
        <Modal 
         cambiarModal = {this.cambiarModal}
         manejarInput = {this.manejarInput} 
         crearEntidad = {this.crearEntidad}
         objeto={this.state.objeto}
         />}
      </div> 
    );
  }
}

export default Pagina

