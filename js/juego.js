//author Alejandro Moreno Camacho
'use strict';
var puntuacion = 0;
if(window.innerWidth > 800){iniciar()}
if(window.innerWidth <=800){iniciar2()}
function iniciar(){
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
  $('.enviarresultado').click(final);
}

function iniciar2(){
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
  $('.enviarresultado').click(final);
}
function final(){
    let titulo = document.createElement('h1');
    let parrafo = document.createElement('p');
    let parrafo2 = document.createElement('p');
    let titulo2 = document.createElement('h1');
    titulo.appendChild(document.createTextNode('Has elegido '+puntuacion+' cosas.'));
    if(puntuacion<5){
      parrafo.appendChild(document.createTextNode('Eres una persona humilde, la verdad es que no todo el mundo puede tener estos privilegios y mucho menos como estos, en el video puedes ver que piden estos niños que no tienen tanta suerte como nosotros.'));
      parrafo2.appendChild(document.createTextNode('Las Navidades son la época en que los niños le dicen lo que quieren a Santa Claus y los adultos lo pagan. Los déficits son las épocas en que los adultos le dicen al Gobierno lo que quieren y los niños lo pagan. Ricchard Lamm dijo esto y no le falta mucha razón; la verdad es que no todo es tan bonito y no todos tienen los mismos privilegios. Estas navidades aprende a valorar y disfrutar de lo que se te brinda día a día, más allá de todos esos regalos que has elegido. Y otra cosa muy importante:'));
      titulo2.appendChild(document.createTextNode('Atrevete al cambio'));
    }
    else{
      parrafo.appendChild(document.createTextNode('¿No crees que has elegido muchas cosas?, la verdad es que no todo el mundo puede tener estos privilegios y mucho menos como estos, en el video puedes ver que piden estos niños que no tienen tanta suerte como nosotros.'));
      parrafo2.appendChild(document.createTextNode('Las Navidades son la época en que los niños le dicen lo que quieren a Santa Claus y los adultos lo pagan. Los déficits son las épocas en que los adultos le dicen al Gobierno lo que quieren y los niños lo pagan. Ricchard Lamm dijo esto y no le falta mucha razón; la verdad es que no todo es tan bonito y no todos tienen los mismos privilegios. Estas navidades aprende a valorar y disfrutar de lo que se te brinda día a día, más allá de todos esos regalos que has elegido. Y otra cosa muy importante:'));
      titulo2.appendChild(document.createTextNode('Atrevete al cambio'));
    }
    if(window.innerWidth > 800){
      $('.resultadofinal').append(titulo);
      $('.resultadofinal').append(parrafo);
      $('.resultadofinal').append(parrafo2);
      $('.resultadofinal').append(titulo2);
    }
    else{
      $('.resultadofinal2').append(titulo);
      $('.resultadofinal2').append(parrafo);
      $('.resultadofinal2').append(parrafo2);
      $('.resultadofinal').append(titulo2);
    }
}
