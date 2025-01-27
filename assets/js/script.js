/*
Design by: Hype Technology Spain
Made by: Mathias Moser
Hype Technology Spain: http://hype.com.es
Copyright 2019 - 2020
All Rights Reserved
*/
//Carousel-----------------------------------------------------------------------------------------------------------------------
$(function() {
    $('#carousel-example-generic').on('slid.bs.carousel', function(event) {
        console.log('slid at ', event.timeStamp)
    })
})
/*
Función Sacada de la Página de Misión País, donde trabajo en conjunto con otros programadores
Copyright: TelecoTeam
Mision Pais España, misionpais.es
Modified by: Mathias Moser
*/
//Subir y Bajar la fecha del Saber Más-----------------------------------------------------------------------------------------------------------------------
function bajar() {
    var obj = document.getElementById("imag");
    obj.style.marginTop = "10px";
    obj.style.transition = "all 0.2s ease-in-out";
}

function subir() {
    var obj = document.getElementById("imag");
    obj.style.marginTop = "0px";
    obj.style.transition = "all 0.2s ease-in-out";
}
function esconder(element){
    var obra = element.getElementsByClassName('obra');
    var cliente = element.getElementsByClassName('cliente');

    cliente[0].style.visibility = "visible!important";
    obra[0].style.visibility = "hidden!important";
}
function mostrar(){

}



//Menu Móvil-----------------------------------------------------------------------------------------------------------------------
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function move(element) {
    elemento = element.getElementsByTagName("span");
    elemento[0].style.transition = "all 0.2s ease-in-out";
    elemento[0].style.color = "#ffc107"
    elemento[0].style.marginLeft = "10px";
}

function moveback(element) {
    elemento = element.getElementsByTagName("span");
    elemento[0].style.transition = "all 0.2s ease-in-out";
    elemento[0].style.color = "white";
    elemento[0].style.marginLeft = "5px";
}
//Formulario-----------------------------------------------------------------------------------------------------------------------
//Bootrap Validación de Formulario de Bootstrap
$(function() {
    'use strict';
    //Carga la función en los campos
    window.addEventListener('load', function() {
        
        //Busca los campos que necesitan validación
        var forms = document.getElementsByClassName('needs-validation'); //Carga el formulario
        //En un bucle no deja que dejen de validarse para ver si están VALIDOS
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                //Siempre chequea si estan validos
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } //Si son validos el bucle se detiene
                form.classList.add('was-validated'); //Y cambia la classe del formulario, para validado
            }, false);
        });
    }, false);
});

//Limitación de palabras en Text Area 300 palabras max--------------------------------------------------------------------
$(document).ready(function() {
    // Función a lanzar cada vez que se presiona una tecla en un textarea
    // en el que se encuentra el atributo maxlength     
    $("textarea[maxlength]").keyup(function() {
        var limit = $(this).attr("maxlength"); // Límite del textarea
        var value = $(this).val(); // Valor actual del textarea
        var current = value.length; // Número de caracteres actual
        if (limit < current) { // Más del límite de caracteres?
            // Establece el valor del textarea al límite
            $(this).val(value.substring(0, limit));
        }
    });
});
//Permite el uso de numeros, caracteres o numeros y caracteres --------------------------------------------------------------------
function permite(elEvento, permitidos) {
    // Variables que definen los caracteres permitidos
    var numeros = "0123456789";
    var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var numeros_caracteres = numeros + caracteres;
    var teclas_especiales = [8, 37, 39, 46];
    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
    // Seleccionar los caracteres a partir del parámetro de la función
    switch (permitidos) {
        case 'num':
            permitidos = numeros;
            break;
        case 'car':
            permitidos = caracteres;
            break;
        case 'num_car':
            permitidos = numeros_caracteres;
            break;
    }
    // Obtener la tecla pulsada
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    var tecla_especial = false;
    for (var i in teclas_especiales) {
        if (codigoCaracter == teclas_especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
}
//Valida la dirección de correo, doblemente, ya que la función de boostrap ya lo hace --------------------
function correo() {
    var valor = document.getElementById("email").value;
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
        return false;
    } else {
        return true;
    }
}