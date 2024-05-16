// script.js

// Obtén el botón por su ID
var btnHasteSocio = document.getElementById('btnHasteSocio');

// Agrega un evento de clic al botón
btnHasteSocio.addEventListener('click', function() {
    // Redirige a la página del formulario
    window.location.href = '/registro'; // Cambio a la URL directa, ya que no se puede usar 'url_for' en JavaScript
});


// Obtén el botón por su ID
var btnHasteSocio = document.getElementById('btnLogin');

// Agrega un evento de clic al botón
btnHasteSocio.addEventListener('click', function() {
    // Redirige a la página del formulario
    window.location.href = '/login'; // Cambio a la URL directa, ya que no se puede usar 'url_for' en JavaScript
});





;
$(function(){
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 800);
                return false;
            }
        }
    });
});
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}



// Este codigo es para ingresar al login 
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})

// Para validar el boton login
function validar() {
    var usuarioR = document.getElementById("usuario").value ;
    var contraseña1 = document.getElementById("contra").value;
    var usuarioEncontrado = false;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarioR == usuarios[i]) {
            usuarioEncontrado = true;
            for (var j = 0; j < contraseñas.length; j++) {
                if (contraseña1 == contraseñas[j]) {
                    // Si el usuario y la contraseña coinciden, redirigir a usuarios.html
                    location.href = "usuarios.html";
                    return;
                }
            }
            // Si el usuario existe pero la contraseña no coincide, mostrar mensaje de error
            alert("Contraseña incorrecta.\nPor favor, confirma tu contraseña.");
            return;
        }
    }

    // Si el usuario no se encuentra en la lista, mostrar mensaje de error
    if (!usuarioEncontrado) {
        alert("¡Aún no te has registrado!");
    }
}



