import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Crea una instancia del adaptador mock de Axios
const mock = new MockAdapter(axios);

// Define los datos de los productos
const productos = [
  {
    id: 1,
    nombre: "Consola Playstation 5",
    rating: 4.5,
    cant_rates: 50,
    descripcion:
      "litia, cupiditate eum aspe repellendus praesentium nihil nemo quod repellat, similique accusantium enim?",
    imagen: "https://prophonechile.cl/wp-content/uploads/2021/04/ps5digital.png",
    precio: 460000.00,
  },
  {
    id: 2,
    nombre: "Libro Harry Potter y la piedra filosofal",
    rating: 1.8,
    cant_rates: 101,
    descripcion:
      "Autor: J.K Rowling Editorial:Salamandra Idioma: Español Nro Paginas: 288..",
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
    precio: 75.50,
  },
  {
    id: 3,
    nombre: "Libro Harry Potter y la piedra filosofal",
    rating: 3.8,
    cant_rates: 101,
    descripcion:
      "Autor: J.K Rowling Editorial:Salamandra Idioma: Español Nro Paginas: 288..",
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
    precio: 75.50,
  },
  {
    id: 4,
    nombre: "Libro Harry Potter y la piedra filosofal",
    rating: 2.8,
    cant_rates: 101,
    descripcion:
      "Autor: J.K Rowling Editorial:Salamandra Idioma: Español Nro Paginas: 288..",
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
    precio: 75.50,
  },
  {
    id: 5,
    nombre: "Libro Harry Potter y la piedra filosofal",
    rating: 1.2,
    cant_rates: 101,
    descripcion:
      "Autor: J.K Rowling Editorial:Salamandra Idioma: Español Nro Paginas: 288..",
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
    precio: 75.50,
  },
  {
    id: 6,
    nombre: "Libro Harry Potter y la piedra filosofal",
    rating: 3.3,
    cant_rates: 101,
    descripcion:
      "Autor: J.K Rowling Editorial:Salamandra Idioma: Español Nro Paginas: 288..",
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/10/9d/109df8e47c0b36b888ea2be18a4ce3e5.jpg",
    precio: 75.50,
  },
  // Define el resto de los productos aquí
];
mock.onGet(/\/api\/productos\/\d+/).reply((config) => {
    const productId = parseInt(config.url.split("/").pop(), 10);
    const productoDetalle = productos.find((producto) => producto.id === productId);
  
    if (productoDetalle) {
      return [200, productoDetalle]; // Responder con los detalles del producto específico
    } else {
      return [404, { message: "Producto no encontrado" }]; // Responder con un error 404 si el producto no se encuentra
    }
  });
  
  
// Simula una solicitud GET a la ruta '/api/productos'
mock.onGet("/api/productos").reply(200, productos);
export default axios;
