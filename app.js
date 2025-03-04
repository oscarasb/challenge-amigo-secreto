// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.



// listado (Array) para almacenar los nombres de amigos
let amigos = [];

//FUNCION 1
function agregarAmigo() {
    let input = document.getElementById("amigo");
   let nombre = input.value.trim().toUpperCase();  // para eliminar espacios en blanco
 

    // Validacion que el campo no esté vacío
    if (nombre === "") {
        alert("Rellene el recuadro insertando un nombre, por favor 🤔");
        return;
    }

    // Expresión para comparar y no permitir caracteres especiales y numeros
    // solo  se aceptaran letras y espacios
    let caractterEspeciales = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!caractterEspeciales.test(nombre)) {
        alert("No se puede insertar ni contener números ni caracteres especiales, intente de nuevo 😵‍💫");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert(" 🥺Este nombre ya ha sido agregado 🥺");
        return;
    }

    // Agregar el nombre al listado o array
        amigos.push(nombre);
    // Limpiar el campo de entrada
        input.value = "";
    // Actualizar la lista en el HTML mandando a llamar la funcion 2
        actualizandoListado();
        
}


//FUNCION 2
function actualizandoListado() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    //Recorrer el array y agregar cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
	let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}

//FUNCION 3
function sortearAmigo() {
    //Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("😰😨No hay amigos en la lista para sortear 🤔");
        return;
    }

    // aqui se generara un nombre de forma aleatoria
    let nombreAleatorio = Math.floor(Math.random() * amigos.length);

    // aqui se obtendrs un nombre sorteado
    let amigoSorteado = amigos[nombreAleatorio];

    // Se observara en pantalla del html el resultado en la lista 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    
    // Se reiniciara el listado de amigos después de acabado el sorteo
    amigos = [];
    actualizandoListado(); // Limpiar el listado en la pantalla del HTML

    
}


 





