const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const dueno = document.getElementById("dueno");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const listamascotas = document.getElementById("lista-mascotas");

let mascotas = [{
        tipo: "Gato",
        nombre: "Manchas",
        dueno: "Esteban"
    },
    {
        tipo: "Perro",
        nombre: "Tylarzz",
        dueno: "Julian"
    }
];

function listarmascotas() {
    const htmlmascotas = mascotas.map((mascota, index) => `<tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
        </div>
    </td>
    </tr>`).join("");
    listamascotas.innerHTML = htmlmascotas;
    Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index) => botonEditar.onclick = editar(index));
    Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index));
}

function enviarDatos(evento) {
    evento.preventDefault();
    const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    const accion = btnGuardar.innerHTML;
    switch (accion) {
        case "Editar":
            mascotas[indice.value] = datos;
            break;
        default:
            mascotas.push(datos);
            break;
    }
    listarmascotas();
    resetModal();
}

function editar(index) {
    return function cuandoClickeo() {
        btnGuardar.innerHTML = "Editar";
        const mascota = mascotas[index];
        nombre.value = mascota.nombre;
        dueno.value = mascota.dueno;
        tipo.value = mascota.tipo;
        indice.value = index;
    }
}

function resetModal() {
    nombre.value = "";
    dueno.value = "Dueño";
    tipo.value = "Tipo de Animal";
    indice.value = "";
    btnGuardar.innerHTML = "Crear";
}

function eliminar(index) {
    return function clickEliminar() {
        mascotas = mascotas.filter((mascota, indiceMascota) => indiceMascota !== index);
        listarmascotas();
    }
}

listarmascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;