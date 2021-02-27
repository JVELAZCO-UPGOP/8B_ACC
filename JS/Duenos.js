const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const identificacion = document.getElementById("identificacion");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const listaDuenos = document.getElementById("lista-duenos");

let duenos = [
    {
        nombre: "Wendy",
        apellido: "Yañez Esquivel",
        pais: "Mexico",
        identificacion: "12345"
    },
    {
        nombre: "Maia",
        apellido: "Gonzales",
        pais: "Argentina",
        identificacion: "1234567890"
    }
];

function listarDuenos(){
    const htmlDuenos = duenos.map((dueno,index)=>`<tr>
    <th scope="row">${index}</th>
    <td>${dueno.nombre}</td>
    <td>${dueno.apellido}</td>
    <td>${dueno.pais}</td>
    <td>${dueno.identificacion}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
        </div>
    </td>
    </tr>`).join("");
    listaDuenos.innerHTML=htmlDuenos;
    Array.from(document.getElementsByClassName("editar")).forEach((botonEditar,index)=>botonEditar.onclick = editar(index));
    Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar,index)=>botonEliminar.onclick = eliminar(index));
}

function enviarDatos(evento){
    evento.preventDefault();
    const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        pais: pais.value,
        identificacion: identificacion.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion){
        case "Editar":
            duenos[indice.value] = datos;
            break;
        default:
            duenos.push(datos);
            break;
    }
    listarDuenos();
    resetModal();
}

function editar(index){
    return function cuandoClickeo(){
        btnGuardar.innerHTML = "Editar";
        const dueno = duenos[index];
        nombre.value =  dueno.nombre;
        apellido.value =  dueno.apellido;
        pais.value =  dueno.pais;
        identificacion.value =  dueno.identificacion;
        indice.value = index;
    }
}

function resetModal(){
    nombre.value = "";
    apellido.value = "";
    pais.value = "";
    identificacion.value = "";
    indice.value = "";
    btnGuardar.innerHTML = "Crear";
}

function eliminar(index){
    return function clickEliminar(){
        duenos = duenos.filter((dueno,indiceDueno)=>indiceDueno !== index);
        listarDuenos();
    }
}

listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;