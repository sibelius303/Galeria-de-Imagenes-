//Variables//
const btnCierra = document.querySelector('#btn-cierra');

const btnAdelantar = document.querySelector('#btn-adelantar');

const btnRetrocede = document.querySelector('#btn-retrocede');

const imagenes = document.querySelectorAll('#galeria img');

const lightbox = document.querySelector('#contenedor-principal');

const imagenActiva = document.querySelector('#img-activa');

let indiceImagen = 0;

//Abre el lightbox//

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
}

imagenes.forEach((imagen)=> {
    imagen.addEventListener('click', abreLightbox);
});

//Cierra el lightbox//

btnCierra.addEventListener('click', ()=> {
    lightbox.style.display = 'none';
});

//Adelantar la imagen//

const adelantaImagen =()=>{
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelantar.addEventListener('click',adelantaImagen );

//Retroceder la imagen//

const retrocedeImagen = ()=>{
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocedeImagen);