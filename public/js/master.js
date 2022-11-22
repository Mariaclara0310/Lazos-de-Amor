let usuario = document.getElementById('usuario');
let nombre = prompt('Indique su nombre');
if(nombre === ''){
    usuario.innerHTML = `Bienvenid@ a tu Tienda Online Invitado`;
}else{
    usuario.innerHTML = `Bienvenid@ a tu Tienda Online ${nombre}`;
}


