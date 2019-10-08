var colores = [];
var cajas = document.querySelectorAll(".caja");
var cartasElegidas = 0;
var cajaAuxiliar;

generarColores();

for(var i = 0; i < cajas.length; i++) {
    cajas[i].style.backgroundColor = colores[i];
}

setTimeout(function() {
    for(var i = 0; i < cajas.length; i++) {
        cajas[i].classList.add("esconderCarta");
    }             
}, 2000);

for(var j = 0; j < cajas.length; j++) {
    cajas[j].addEventListener("click", function() {
        cartasElegidas++;

        if(cartasElegidas === 1) {
            caja1 = this.style.backgroundColor;
            caja1Index = this.textContent;
            this.classList.remove("esconderCarta");
        }

        if(cartasElegidas === 2) {
            cajaAuxiliar = this.style.backgroundColor;
            cajaAuxiliarIndex = this.textContent;
            this.classList.remove("esconderCarta");
            cartasElegidas = 0;
        }

        setTimeout(function() {
            if(caja1 === cajaAuxiliar && caja1Index != cajaAuxiliarIndex) {
                //Busco las cajas coincidientes con las elegidas, y les pongo la opacidad en 0
                for(var x = 0; x < cajas.length; x++) {
                    if(cajas[x].style.backgroundColor === caja1 || cajas[x].style.backgroundColor === cajaAuxiliar) {
                        cajas[x].style.opacity = "0";
                    }
                }
            }
        }, 2000);

        setTimeout(function() {
            if(cartasElegidas === 0) {
                for(var y = 0; y < cajas.length; y++) {
                    if(!cajas[y].classList.contains("esconderCarta")) {
                        console.log(cajas[y].classList.toggle("esconderCarta"));
                    }
                }   
            }
        }, 1500);
    });
}

// Funciones

function generarColor() {
    var rojo = Math.floor((Math.random() * 255) + 1);
    var verde = Math.floor((Math.random() * 255) + 1);
    var azul = Math.floor((Math.random() * 255) + 1);

    return "rgb(" + rojo + ", " + verde + ", " + azul + ")";
}

function generarColores() {
    var color;
    for(var i = 0; i < cajas.length / 2; i++) {
        color = generarColor();
        colores.push(color, color);
    }

    //Mezclar los colores https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (var i = colores.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = colores[i];
        colores[i] = colores[j];
        colores[j] = temp;
    }
}