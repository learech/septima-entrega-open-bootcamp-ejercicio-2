const persona = {
    nombre: "Leandro",
    apellido: "Rech",
    edad: 38,
    altura: 180,
    isDeveloper: true,
}

const edad= persona.edad;
console.log(edad);

const amigos= [
    {
        ...persona
    }, 
    {
        nombre: "Fernando",
        apellido: "Páez",
        edad: 25,
        altura: 190,
        isDeveloper: true, 
    },
    {
        nombre: "Leandro",
        apellido: "Olid",
        edad: 38,
        altura: 175,
        isDeveloper: false,  
    }
]

const listaOrdenada = amigos.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);