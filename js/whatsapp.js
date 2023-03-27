  
// variable 
console.log('llego a este putno')
var whatsapp = document.querySelector('.whatsapp');

// creamos un evento que escuche el scroll y al detectarlo se ejecute una funcion,
document.addEventListener('scroll',function(){   
    var posicion = window.scrollY;
    console.log(posicion)
    if(posicion>1000){
        whatsapp.classList.add('mostrarWhatsapp');
    } else{
        whatsapp.classList.remove('mostrarWhatsapp');
    }

});