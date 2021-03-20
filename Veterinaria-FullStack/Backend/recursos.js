module.exports = {
    mascotas: [
        { tipo: "Perro", nombre: "Tylarzz0", dueno: "Logan" },
        { tipo: "Perro", nombre: "Tylarzz1", dueno: "Logan" },
        { tipo: "Perro", nombre: "Tylarzz2", dueno: "Logan" },
        { tipo: "Perro", nombre: "Tylarzz3", dueno: "Logan" },
        { tipo: "Perro", nombre: "Tylarzz4", dueno: "Logan" },
    ],
    veterinarias: [
        { nombre: "Alejandra", apellido: "Suarez", documento: "12345" },
        { nombre: "Rodrigo", apellido: "Perez", documento: "12345123" },
        { nombre: "Brisa", apellido: "Yañez ", documento: "12123" },
        { nombre: "Pedro", apellido: "Rios", documento: "123" },
    ],
    duenos: [
        { nombre: "Pepe", apellido: "Ramirez", documento: "12345" },
        { nombre: "Camila", apellido: "Perez", documento: "12345123" },
        { nombre: "Yoss", apellido: "Nuñes ", documento: "12123" },
        { nombre: "Pedro", apellido: "Rios", documento: "123" },
    ],
    consultas: [{
        mascota: 0,
        veterinaria: 0,
        fechaCreacion: new Date(),
        fechaEdicion: new Date(),
        historia: "",
        diagnostico: "diagnostico"
    }, ],
}