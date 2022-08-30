//AVENGERS
/*let condicion = true
do{
let vengadorIngresado = prompt ("Ingrese su superheroe favorito de la 1ra pelicula de los Vengadores")
switch(vengadorIngresado.toLowerCase()){
    case "ironman":
        alert("Soy un genio, billonario, mujeriego, filantropo...");
        condicion = false;
    break;
    case "hulk":
        alert("HULK ENOJADO APLASTAAAAAAAA!")
        condicion = false
    break;
    case "thor":
        alert("Yo soy Thor, hijo de Odín y mientras haya vida en mi pecho… No se me ocurre más nada que decir. ¿Estás listo para morir?")
        condicion = false
    break;
    case "hawkeye":
        alert("Tú y yo recordamos Budapest de forma muy diferente")
        condicion = false
    break;
    case "la viuda negra":
        alert("Antes no tenía nada y ahora tengo esto. Este trabajo, esta familia, y eso me hizo mejor de lo que era, y aunque todos se han ido, todavía trato de ser mejor.")
        condicion = false
    break;
    case "capitan america":
        alert ("Puedo hacer esto todo el dia")
        condicion = false
    break;
    default:
        alert("SOSPECHOSO!, no conoces a ninguno, seguro eres de hydra! Intenta de nuevo...")
}
}while(condicion)*/

let comicIronMan = 1500
let comicSpiderman = 2000
let comicCapitanAmerica = 1500
let condicion = true




do{
    let comprarComics = parseInt(prompt("Que comic desea comprar?: 1) IronMan 2) SpiderMan 3) Capitan America (ACLARACION: coloque solamente el numero del comic!"))

switch(comprarComics){

    case 1:
      let precioIronman = prompt(`El precio del comic de IronMan es de $${comicIronMan}, desea comprarlo? coloque si o no`)
                        switch(precioIronman){
                                    case "si":
                                     let cuotas = parseInt(prompt("Desea pagarlo en 1, 2 o 3 cuotas sin interes?"))
                                        switch(cuotas){
                                            case 1:
                                                let resultadoCuotasUno = comicIronMan/1
                                                let cuotaUno = prompt(`Desea comprar el comic de ironMan a 1 cuota de $${resultadoCuotasUno}? si o no?`)
                                                    switch(cuotaUno){
                                                        case "si":
                                                            alert("Muchas gracias por su compra!")
                                                            condicion = false
                                                        break;

                                                        case "no":
                                                            alert("No hay problema, volvera al inicio")
                                                        break;

                                                        default:
                                                            alert("Comando incorrecto, volvamos a empezar!")
                                                        break;
                                                    }
                                            
                                            case 2:
                                                let resultadoCuotasDos = comicIronMan/2
                                                let cuotaDos = prompt(`Desea comprar el comic de ironMan a 2 cuotas de $${resultadoCuotasDos}? si o no?`)
                                                switch(cuotaDos){
                                                case "si":
                                                            alert("Muchas gracias por su compra!")
                                                            condicion = false
                                                        break;

                                                        case "no":
                                                            alert("No hay problema, volvera al inicio")
                                                        break;

                                                        default:
                                                            alert("Comando incorrecto, volvamos a empezar!")
                                                        break;
                                                    }

                                             case 3:
                                                let resultadoCuotasTres = comicIronMan/3
                                                let cuotaTres = prompt(`Desea comprar el comic de ironMan a 2 cuotas de $${resultadoCuotasTres}? si o no?`)
                                                switch(cuotaTres){
                                                case "si":
                                                            alert("Muchas gracias por su compra!")
                                                            condicion = false
                                                        break;
        
                                                       case "no":
                                                            alert("No hay problema, volvera al inicio")
                                                           break;
        
                                                         default:
                                                            alert("Comando incorrecto, volvamos a empezar!")
                                                         break;
                                                            }

                                                 
                                            
                                                
                                                  
                                        }
                                     break;
                                     
                                    case "no":
                                        alert("No se preocupe, lo devolveremos al inicio!")
                                        break;

                                    default:
                                        alert("Opcion incorrecta, volvamos a empezar!")
                                        ;

                        }

    
      break;
                
   

}
}while(condicion);








