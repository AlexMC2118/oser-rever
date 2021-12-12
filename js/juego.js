//author Alejandro Moreno Camacho
'use strict';
let puntuacion = 0;
if(window.innerWidth > 800){iniciar(puntuacion)}
if(window.innerWidth <=800){iniciar2(puntuacion)}

function iniciar(puntuacion){
  let elementos = [
    'Movil',
    'Ordenador',
    'Dinero',
    'Coche',
    'Comida',
    'Ropa',
    'Libros',
    'Juguetes',
    'Consola',
    'Moto',
    'Patinete',
    'Videojuegos',
    'Nada',
    'Otro...'
  ];
  for(let i=0;i<elementos.length;i++){
    let sw = 0;
    let boton = document.createElement('button');
    boton.appendChild(document.createTextNode(elementos[i]));
    $('.salida').append(boton);
    boton.addEventListener('click', function escuchador(){
      if(sw == 0){
        $('.recogida').append(boton);
        puntuacion+=1;
        sw=1;
      }
      else{
        $('.salida').append(boton);
        puntuacion-=1;
        sw=0;
      }
    });
  }
}

function iniciar2(puntuacion){
  let elementos = [
    'Movil',
    'Ordenador',
    'Dinero',
    'Coche',
    'Comida',
    'Ropa',
    'Libros',
    'Juguetes',
    'Consola',
    'Moto',
    'Patinete',
    'Videojuegos',
    'Nada',
    'Otro...'
  ];
  for(let i=0;i<elementos.length;i++){
    let sw = 0;
    let boton = document.createElement('button');
    boton.appendChild(document.createTextNode(elementos[i]));
    $('.salida2').append(boton);
    boton.addEventListener('click', function escuchador(){
      if(sw == 0){
        $('.recogida').append(boton);
        puntuacion+=1;
        sw=1;
      }
      else{
        $('.salida2').append(boton);
        puntuacion-=1;
        sw=0;
      }
    });
  }
}
