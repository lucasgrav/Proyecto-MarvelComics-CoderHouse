//Compra de comics
//Variables
let visibleListado = true;

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
function compraDeComics(nombreDelComic, precioDelComic) {
  let comprarComic = prompt(
    `El precio del comic de ${nombreDelComic} es de $${precioDelComic}, desea comprarlo? coloque si o no`
  ).toLowerCase();
  switch (comprarComic) {
    case "si":
      let cuotas = parseInt(
        prompt("Desea pagarlo en 1, 2 o 3 cuotas sin interes?")
      );
      cuotasFuncion(nombreDelComic, cuotas, precioDelComic);
      break;

    case "no":
      alert("No se preocupe, lo devolveremos al inicio!");
      break;

    default:
      alert("Opcion incorrecta, volvamos a empezar!");
      break;
  }
}

//FUNCION PARA MOSTRAR LISTADO

let productosComics = document.getElementById("productosComics");

function mostrarComics(comicsMostrar) {
  if (comicsMostrar.length > 0) {
    productosComics.innerHTML = "";
    comicsMostrar.forEach((comic) => {
      let nuevoComic = document.createElement("div");
      nuevoComic.innerHTML = `<div class="cardsComics">
  <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">${comic.nombre}</h4>
        <p>Editorial:${comic.editorial}</p>
        <p>Precio:$${comic.precio}</p>
        <a  class="btn btn-primary btnComprar">Comprar.</a>
      </div>
    </div>
  </div>`;
      productosComics.appendChild(nuevoComic);
    });
    let btnsComprar = document.getElementsByClassName("btnComprar");

    for (let index = 0; index < btnsComprar.length; index++) {
      const btn = btnsComprar[index];
      let comic = comicsMostrar[index];
      btn.addEventListener("click", () => {
        compraDeComics(comic.nombre, comic.precio);
      });
    }
  } else {
    productosComics.innerHTML = "No hay productos!";
  }
}

//FUNCION PARA BOTON DE OCULTAR LISTADO

function ocultarCatalogo() {
  productosComics.innerHTML = "";
}
function toggleComicsList() {
  if (visibleListado) {
    mostrarComics(comics);
    verListadoComics.innerHTML = "Ocultar listado de comics!";
  } else {
    ocultarCatalogo();
    verListadoComics.innerHTML = "Ver listado de comics!";
  }
  visibleListado = !visibleListado;
}

//FUNCION PARA BUSCAR COMICS

function busquedaDeComic() {
  let busquedaComic = prompt("Que comic desea ver?").toLowerCase();
  let resultadoBusqueda = comics.filter(
    (comic) =>
      comic.editorial.toLowerCase().indexOf(busquedaComic) > -1 ||
      comic.nombre.toLowerCase().indexOf(busquedaComic) > -1
  );
  mostrarComics(resultadoBusqueda);
}

//BOTONES

let verListadoComics = document.getElementById("verList");
verListadoComics.addEventListener("click", () => {
  toggleComicsList();
});

let buscarComics = document.getElementById("buscarComics");
buscarComics.addEventListener("click", () => {
  busquedaDeComic();
});
