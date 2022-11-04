let menuVisible = false;
//Función de ocultar o mostrar el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

// Ocultar menu una vez que se selecciono una opcion
function seleccionar (){
document.getElementById("nav").classList = "";
menuVisible = false;
}

//Funcion que aplica las animaciones de las skills
function efectoHabilidades(){
let skills = document.getElementById ("skills");
let distancia_skills = window.innerHeight - skills.getBoundingClientRect ().top;
if(distancia_skills >= 300){
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("Javascript");
    habilidades[1].classList.add("HTMLCSS");
    habilidades[2].classList.add("Premier");
    habilidades[3].classList.add("Illustrator");
    habilidades[4].classList.add("AfterEffects");
    habilidades[5].classList.add("Creatividad");
    habilidades[6].classList.add("TrabajoenEquipo");
    habilidades[7].classList.add("AprendizajeContinuo");
    habilidades[8].classList.add("TomadeDecisiones");
    habilidades[9].classList.add("Proactividad");


}
}
//detectar el scrolling para la animación de la barras

window.onscroll = function(){
    efectoHabilidades();
}