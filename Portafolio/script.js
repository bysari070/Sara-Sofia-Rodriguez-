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
    titulo.style.color = "pink"
}

estadoOriginal= !estadoOriginal;

});
