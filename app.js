// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = "" ;//input
let amigos =  []; //array nombres

//input 'amigo' 
function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value; 
    if(nombreAmigo == '') { //validar si campo está vacio
    alert('Tienes escribir un nombre')
} else { 
            amigos.push(nombreAmigo); //actualizar array
limpiarCaja(); //limpiar campo de entrada
recorrerAmigos();//ejecuta la funcion listahtml e imprimir
nombreAmigo = '';//limpiar amigo ingresado
} }

//funcion general limpia caja.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


//funcion para recorrer array de amigos, y agregar cada uno a <li>
function recorrerAmigos() {// función que muestre en la consola y parrafo todos los elementos de la lista amigos por separado.
       let lista = document.getElementById("listaAmigos"); //declaro lista, esto es para poder hacer la lista html
       lista.innerHTML = ""; //innerhtml despliega en html, acá borramos para evitar duplicados
       
       //recorrer
       for (let i = 0; i < amigos.length; i++) { //crea una variable i, la pone en cero, le va sumando en cada bucle i++, en cada bucle sale un consolelog, imprimiendo una posicion del array.
     // console.log(amigos); //para testear en consola
//listaAmigos.innerHTML = amigos;      // imprimir amigos en html, los imprimer con comas, test
//añadir amigo a listaAmigo como elementoZli>
/*esta forma no me funciona
let li = document.createElement("li"); // Crear un elemento <li>
li.textContent = amigo; // Agregar el nombre del amigo
lista.appendChild(li); // Insertarlo en la lista
console.log(lista);*/

//sección para imprimir cada nombre en una lista visible
lista.innerHTML += `<li>${amigos[i]}</li>`; //opcion innerHTML += seguerida por chatgpt, poco eficiente
            }
  }




console.log(amigos);
//sorteo
function sortearAmigo() {
    let amigoElegido = parseInt(Math.random() *numeroAmigosIngresados + 1);
    let cantidadAmigosSorteados = amigos.length;
    //en desarrollo
  }


/*
//funcion general para asignar textos
function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


*/