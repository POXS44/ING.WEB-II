

//Buscar el botón del DOM
var button = document.querySelector("button");

//adjuntar un evento cuando el usuario hace //clic en el
button.addEventListener("click", mifuncion);

//Crear la función que se llamará cuando se //presione el botón
function mifuncion()
{
       //Esto muestra una ventana emergente
       alert("button clicked!");
}
