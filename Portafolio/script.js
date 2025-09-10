const titulo = document.getElementById("bio");
let estadoOriginal = true;

titulo.innerText = "Portafolio personal...";


titulo.addEventListener("click" ,() => {
if(estadoOriginal === true) {
    titulo.innerText = "de Sari :) ";
    titulo.style.color = "pink";
}

else {
    titulo.innerText = "Portafolio personal...";
    titulo.style.color = "chocolate"
}

estadoOriginal= !estadoOriginal;

});


// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://www.suizavacaciones.com/sites/default/files/c_switzerland_tourism_jan_geerk_0.jpg",
  "https://images.interhome.group/travelguide/switzerland-zermatt-winter.jpg",
  "https://www.goworldtravel.com/wp-content/uploads/2023/08/Lausanne-Switzerland.jpg",
  "https://okdiario.com/img/2020/10/04/5-curiosidades-de-ginebra-suiza-que-te-sorprenderan.jpg",
  "https://assets.micontenthub.com/traveloffers/traveler-editorials/a-guide-to-zurich-what-to-do-and-where-to-stay/AboatpassingthoughZurichsOldTown_xylMD0s2k.jpg",
  "https://wp-content.miviaje.com/2018/11/ciudad-medieval-lucerna.jpg",

];

const titulos = [
  "Eres Berna",
  "Eres Zermatt",
  "Eres Lausanne",
  "Eres Ginebra",
  "Eres Zurich",
  "Eres Lucerna",
];

const frases = [
  "Eres la capital de Suiza, la ciudad donde estudio Albert Einstein. Una persona muy inteligente y clásica",
  "Eres pequeña pero hermosa, tienes el Matterhorn, la montaña iconica del chocolate Toblerone. Eres aventurera y única",
  "Eres la ciudad de los juegos olimpicos, tienes un Lago hermoso y muchas escaleras. Eres jovial y querida por muchos",
  "Eres una de las ciudades más grandes de Suiza, tienes muchs museos, eres muy historica y tienes la sede de las Naciones Unidas. Tienes un alma sabia y eres muy inteligente",
  "Eres de las ciudades más caras del mundo, tienes a una de las fabricas de chocolate más famosas del mundo. Eres muy fancy, linda y especial",
  "Eres una ciudad medieval, tienes un puente hermoso muy clasico y tienes un Carnaval muy memorable dentro de Suiza. Eres hermosa, brillante y divertida",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const tituloprediccion = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  tituloprediccion.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();