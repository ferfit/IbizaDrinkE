// guardamos el elemento en una variable para luego trabajar  con ella
var contenedor = document.querySelector('.header__contenedor-principal');
var hamburger = document.querySelector('.hamburger');
var link = document.querySelectorAll('.menu__link');

console.log(link);

// creamos un evento que escuche el scroll y al detectarlo se ejecute una funcion,
document.addEventListener('scroll',function(){   
    var posicion = window.scrollY;
    if(posicion>0){
        contenedor.classList.add('menuBackground');
        hamburger.classList.add('hamburgerTop');
        for (let i = 0; i < link.length; i++) {
            link[i].classList.add('linkColor');  
        }

    } else{
        contenedor.classList.remove('menuBackground');
        hamburger.classList.remove('hamburgerTop');
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('linkColor');  
        }
    }
});