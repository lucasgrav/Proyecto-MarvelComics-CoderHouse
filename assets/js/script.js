//Compra de comics
//Variables
let condicion = true;
//ARRAYS
const comics = [
  { id: 1, nombre: "Iron Man", precio: 1500, editorial: "Marvel" },
  { id: 2, nombre: "Capitan America", precio: 1500, editorial: "Marvel" },
  { id: 3, nombre: "SpiderMan", precio: 2000, editorial: "Marvel" },
  { id: 4, nombre: "Batman", precio: 2200, editorial: "Dc" },
  { id: 5, nombre: "Los jovenes titanes", precio: 1700, editorial: "Dc" },
  { id: 6, nombre: "El acertijo", precio: 2500, editorial: "Dc" },
];
//FUNCIONES
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
//FUNCION PARA OPCION 1
function compraDeComics() {
  let comprarComics = parseInt(
    prompt(
      "Que comic desea comprar?:\n(ACLARACION: coloque solamente el numero del comic!\n1) IronMan\n2) SpiderMan\n3) Capitan America\n4) Batman\n5) Los jovenes titanes\n6) El acertijo"
    )
  );
  if (
    comprarComics == 1 ||
    comprarComics == 2 ||
    comprarComics == 3 ||
    comprarComics == 4 ||
    comprarComics == 5 ||
    comprarComics == 6
  ) {
    let comicSeleccionado = comics.find((comic) => comic.id == comprarComics);

    let comprarComic = prompt(
      `El precio del comic de ${comicSeleccionado.nombre} es de $${comicSeleccionado.precio}, desea comprarlo? coloque si o no`
    );
    switch (comprarComic) {
      case "si":
        let cuotas = parseInt(
          prompt("Desea pagarlo en 1, 2 o 3 cuotas sin interes?")
        );
        cuotasFuncion(
          comicSeleccionado.nombre,
          cuotas,
          comicSeleccionado.precio
        );
        break;

      case "no":
        alert("No se preocupe, lo devolveremos al inicio!");
        break;

      default:
        alert("Opcion incorrecta, volvamos a empezar!");
        break;
    }
  } else {
    alert("Ese digito no corresponde a ningun comic, intentalo de vuelta!");
  }
}
//FUNCION PARA OPCION 2
function busquedaDeComic() {
  let busquedaComic = prompt("Que comic desea ver?").toLowerCase();
  let resultadoBusqueda = comics.filter(
    (comic) =>
      comic.editorial.toLowerCase().indexOf(busquedaComic) > -1 ||
      comic.nombre.toLowerCase().indexOf(busquedaComic) > -1
  );
}

// FUNCION PARA OPCION 3
function listadoDeComics(lista) {
  let listaComics = "";
  for (const comic of lista) {
    listaComics =
      listaComics + `Comic: ${comic.nombre} / Editorial: ${comic.editorial}\n`;
  }
  alert(`Puede ver el listado de comics: \n ${listaComics}`);
}

//CICLO
do {
  let menuDePagina = parseInt(
    prompt(
      "Bienvenido a ComicZone que desea realizar:  \n1- Comprar comics  \n2- Buscar comics por editorial  \n3- Ver Listado de Comics \n4- Salir"
    )
  );
  switch (menuDePagina) {
    case 1:
      compraDeComics();
      break;
    case 2:
      busquedaDeComic();
      break;
    case 3:
      listadoDeComics(comics);
      break;
    case 4:
      alert("Muchas gracias por visitarnos! Vuelva Pronto!");
      condicion = false;
      break;
    default:
      alert("Digito incorrecto, intentelo de nuevo!");
      break;
  }
} while (condicion);
