//Compra de comics
//Variables
let precioIronMan = 1500;
let precioSpiderman = 2000;
let precioCapitanAmerica = 1500;
let condicion = true;
//Funciones
function cuotasFuncion(nombreComic, cantidadCuotas, precioComic) {
  let divisionCuotas = parseInt(precioComic / cantidadCuotas);
  let compra = prompt(
    `Desea comprar el comic de ${nombreComic} a ${cantidadCuotas} cuota de $${divisionCuotas}? si o no?`
  );
  switch (compra) {
    case "si":
      alert("Muchas gracias por su compra!");
      condicion = false;
      break;

    case "no":
      alert("No hay problema, volvera al inicio");
      break;

    default:
      alert("Comando incorrecto, volvamos a empezar!");
      break;
  }
}
//Ciclo
do {
  let comprarComics = parseInt(
    prompt(
      "Que comic desea comprar?: 1) IronMan 2) SpiderMan 3) Capitan America (ACLARACION: coloque solamente el numero del comic!"
    )
  );
  if (comprarComics == 1 || comprarComics == 2 || comprarComics == 3) {
    let nombreComic = "";
    let precioComics = 0;

    switch (comprarComics) {
      case 1:
        nombreComic = "IronMan";
        precioComics = precioIronMan;
        break;
      case 2:
        nombreComic = "SpiderMan";
        precioComics = precioSpiderman;
        break;
      case 3:
        nombreComic = "Capitan America";
        precioComics = precioCapitanAmerica;
        break;
    }

    let comprarComic = prompt(
      `El precio del comic de ${nombreComic} es de $${precioComics}, desea comprarlo? coloque si o no`
    );
    switch (comprarComic) {
      case "si":
        let cuotas = parseInt(
          prompt("Desea pagarlo en 1, 2 o 3 cuotas sin interes?")
        );
        cuotasFuncion(nombreComic, cuotas, precioComics);
        break;

      case "no":
        alert("No se preocupe, lo devolveremos al inicio!");
        break;

      default:
        alert("Opcion incorrecta, volvamos a empezar!");
        break;
    }
  }
} while (condicion);
