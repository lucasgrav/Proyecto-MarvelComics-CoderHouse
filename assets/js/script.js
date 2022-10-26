//Compra de comics
/*----------------------------------------------------------------------------------------------------------------------*/
//Variables
/*----------------------------------------------------------------------------------------------------------------------*/

let visibleListado = true;

/*----------------------------------------------------------------------------------------------------------------------*/
//ARRAYS
/*----------------------------------------------------------------------------------------------------------------------*/
const comics = [
  {
    id: 1,
    nombre: "Iron Man",
    precio: 1500,
    editorial: "Marvel",
    imagen: "./assets/images/iron-man-1.jpg",
  },
  {
    id: 2,
    nombre: "Capitan America",
    precio: 1500,
    editorial: "Marvel",
    imagen: "./assets/images/capitanamerica.jpg",
  },
  {
    id: 3,
    nombre: "SpiderMan",
    precio: 2000,
    editorial: "Marvel",
    imagen: "./assets/images/spiderman.jpg",
  },
  {
    id: 4,
    nombre: "Batman",
    precio: 2200,
    editorial: "Dc",
    imagen: "./assets/images/batman.jpg",
  },
  {
    id: 5,
    nombre: "Los jovenes titanes",
    precio: 1700,
    editorial: "Dc",
    imagen: "./assets/images/jovenes-titanes-nuevos-tapa-01.webp",
  },
  {
    id: 6,
    nombre: "El acertijo",
    precio: 2500,
    editorial: "Dc",
    imagen: "./assets/images/acertijo.webp",
  },
];

let comicsEnElCarrito = [];

/*----------------------------------------------------------------------------------------------------------------------*/
//FUNCION PARA AGREGAR AL CARRITO
/*----------------------------------------------------------------------------------------------------------------------*/

function agregarAlCarrito(comic) {
  let comicAgregado = comicsEnElCarrito.find((elem) => elem.id == comic.id);
  if (comicAgregado == undefined) {
    comicsEnElCarrito.push(comic);
    Toastify({
      text: "Agregado al carrito!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #0d6efd, #5489d9)",
      },
      onClick: function () {},
    }).showToast();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Este comic ya se encuentra en el carrito!",
    });
  }
}

function cargarComicsEnElCarrito(array) {
  modalBody.innerHTML = "";
  array.forEach((comicCarrito) => {
    modalBody.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${comicCarrito.id}" style="max-width: 200px;">
            <img class="card-img-top" src="${comicCarrito.imagen}" alt="${comicCarrito.nombre}">
            <div class="card-body">
                    <h4 class="card-title">${comicCarrito.nombre}</h4>
                
                    <p class="card-text">$${comicCarrito.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar${comicCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>                    
        </div>
`;
  });
  array.forEach((comicCarrito, indice) => {
    document
      .getElementById(`botonEliminar${comicCarrito.id}`)
      .addEventListener("click", () => {
        array.splice(indice, 1);
        guardarCarritoEnElStorage();
        cargarComicsEnElCarrito(array);
      });
  });
  totalDeLaCompra(comicsEnElCarrito);
}

function totalDeLaCompra(array) {
  let acumulador = 0;
  acumulador = array.reduce((acumulador, comicCarrito) => {
    return acumulador + comicCarrito.precio;
  }, 0);
  acumulador == 0
    ? (parrafoCompra.innerHTML = `No hay comics en el carrito, agregue alguno!`)
    : (parrafoCompra.innerHTML = `El total es $${acumulador}`);
}

function guardarCarritoEnElStorage() {
  localStorage.setItem("carritoDeComics", JSON.stringify(comicsEnElCarrito));
}
function obtenerCarritoDelStorage() {
  let getComics = localStorage.getItem("carritoDeComics");
  if (getComics != null) {
    comicsEnElCarrito = JSON.parse(getComics);
  }
}

/*----------------------------------------------------------------------------------------------------------------------*/
//FUNCION PARA MOSTRAR LISTADO
/*----------------------------------------------------------------------------------------------------------------------*/

let productosComics = document.getElementById("productosComics");

function mostrarComics(comicsMostrar) {
  if (comicsMostrar.length > 0) {
    productosComics.innerHTML = "";
    comicsMostrar.forEach((comic) => {
      let nuevoComic = document.createElement("div");
      nuevoComic.innerHTML = `<div class="cardsComics">
  <div id="${comic.id}"class="card" style="width: 18rem;">
      <img src="${comic.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">${comic.nombre}</h4>
        <p>Editorial:${comic.editorial}</p>
        <p>Precio:$${comic.precio}</p>
        <a  id="agregarButton${comic.id}" class="btn btn-primary btnComprar">Agregar al carrito</a>
      </div>
    </div>
  </div>`;
      productosComics.appendChild(nuevoComic);

      let buttonAgregar = document.getElementById(`agregarButton${comic.id}`);
      buttonAgregar.addEventListener("click", () => {
        console.log(comic);
        agregarAlCarrito(comic);
        guardarCarritoEnElStorage();
      });
    });
  } else {
    productosComics.innerHTML =
      "<div ></div><div class = noHayComics><p>No se han encontrado comics!<p/></div><div></div>";
  }
}

/*----------------------------------------------------------------------------------------------------------------------*/
//FUNCION PARA BOTON DE OCULTAR LISTADO
/*----------------------------------------------------------------------------------------------------------------------*/

function ocultarCatalogo() {
  productosComics.innerHTML = "";
}
function toggleComicsList() {
  visibleListado ? mostrarComics(comics) : ocultarCatalogo();
  visibleListado
    ? (verListadoComics.innerHTML = "Ocultar listado de comics!")
    : (verListadoComics.innerHTML = "Ver listado COMPLETO de comics!");
  visibleListado = !visibleListado;
}

/*----------------------------------------------------------------------------------------------------------------------*/
//FUNCION PARA BUSCAR COMICS
/*----------------------------------------------------------------------------------------------------------------------*/

function busquedaDeComic() {
  let searchInput = document
    .getElementById("criterioSearch")
    .value.toLowerCase();
  let resultadoBusqueda = comics.filter(
    (comic) =>
      comic.editorial.toLowerCase().indexOf(searchInput) > -1 ||
      comic.nombre.toLowerCase().indexOf(searchInput) > -1
  );
  mostrarComics(resultadoBusqueda);
}

/*----------------------------------------------------------------------------------------------------------------------*/
//BOTONES
/*----------------------------------------------------------------------------------------------------------------------*/

let verListadoComics = document.getElementById("verList");
let botonCarrito = document.getElementById("botonCarrito");
let modalBody = document.getElementById("modal-body");
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra");
let parrafoCompra = document.getElementById("precioTotal");
let buscador = document.getElementById("searchBtn");

obtenerCarritoDelStorage();

verListadoComics.addEventListener("click", () => {
  toggleComicsList();
});

botonCarrito.addEventListener("click", () => {
  cargarComicsEnElCarrito(comicsEnElCarrito);
});

buscador.addEventListener("click", () => {
  busquedaDeComic();
});
botonFinalizarCompra.addEventListener("click", () => {
  Swal.fire("Gracias, vuelva pronto!");
  comicsEnElCarrito = [];
  guardarCarritoEnElStorage();
});
