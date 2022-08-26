//AVENGERS
let condicion = true
do{
let vengadorIngresado = prompt ("Ingrese su superheroe favorito de la 1ra pelicula de los Vengadores")

if (vengadorIngresado.toLowerCase() == "ironman"){
    alert("Soy un genio, billonario, mujeriego, filantropo...")
    condicion = false
}
else if(vengadorIngresado.toLowerCase() == "hulk"){
    alert("HULK ENOJADO APLASTAAAAAAAA!")
    condicion = false
}
else if (vengadorIngresado.toLowerCase == "thor"){
    alert("Yo soy Thor, hijo de Odín y mientras haya vida en mi pecho… No se me ocurre más nada que decir. ¿Estás listo para morir?")
    condicion = false
}
else if (vengadorIngresado.toLowerCase == "hawkeye"){
    alert("Tú y yo recordamos Budapest de forma muy diferente")
    condicion = false
}
else if (vengadorIngresado.toLowerCase == "la viuda negra"){
    alert("Antes no tenía nada y ahora tengo esto. Este trabajo, esta familia, y eso me hizo mejor de lo que era, y aunque todos se han ido, todavía trato de ser mejor.")
    condicion = false
}
else if (vengadorIngresado.toLowerCase == "capitan america"){
    alert ("Puedo hacer esto todo el dia")
    condicion = false
}
else {
    alert("SOSPECHOSO!, no conoces a ninguno, seguro eres de hydra! Intenta de nuevo...")
}
}while(condicion)






