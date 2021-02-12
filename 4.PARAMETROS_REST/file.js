

function enviarCarros(...idCarros)
{ 
   idCarros.forEach(id => console.log(id));
} 

enviarCarros(100,200,300);

//100 200 300


function enviarCarro(dia,...idCarros)
{ 
   idCarros.forEach(id => console.log(id));
} 

enviarCarro('Miercoles',100,200,300);


