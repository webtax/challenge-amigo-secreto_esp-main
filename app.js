// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = "" ;//input
let amigos =  []; //array nombres
let amigoSorteado = '';


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


//sección para imprimir cada nombre en una lista visible
lista.innerHTML += `<li>${amigos[i]}</li>`; //opcion innerHTML += seguerida por chatgpt, poco eficiente
            }
  }

//función sorteo
function sortearAmigo() { 
    let resultadoImpreso = document.getElementById("resultado");
    if (amigos.length === 0) {
       resultadoImpreso.innerHTML = "Debe ingresar nombres";
       } else {
   let indiceAleatorio  = Math.floor(Math.random()*amigos.length)
   amigoSorteado = amigos[indiceAleatorio] 
   resultadoImpreso.innerHTML = amigoSorteado;
   }
        
  }



