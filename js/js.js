      // Variables para el carrito
      let carrito = [];
      let total = 0;
      const infoBox = document.getElementById("infoBox");
      const carritoDiv = document.getElementById("carrito");
 
      
      // Función para añadir al carrito
      function añadirAlCarrito() {
          const producto = {
              nombre: "Sudadera Indominus gris",
              precio: 24.99,
              imagen: "images/sudaderagris.webp",
              cantidad: 1
          };
          total += 24.99;
          // Buscar si el producto ya está en el carrito
          const productoExistente = carrito.find(item => item.nombre === producto.nombre);
               

          if (productoExistente) {
              // Si ya existe, incrementar el precio
              productoExistente.precio += producto.precio;
              productoExistente.cantidad++;
          } else {
              // Si no existe, agregarlo al carrito
              carrito.push(producto);
          }
          
          actualizarCarrito();
      }
// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}
    
      function añadirAlCarrito1() {
          const producto = {
              nombre: "Sudadera Indominus blanca",
              precio: 24.99,
              imagen: "images/sudaderablanca.jpg",
              cantidad: 1
          };
          total += 24.99;
          // Buscar si el producto ya está en el carrito
          const productoExistente = carrito.find(item => item.nombre === producto.nombre);

          if (productoExistente) {
              // Si ya existe, incrementar el precio
              productoExistente.precio += producto.precio;
              productoExistente.cantidad++;
          } else {
              // Si no existe, agregarlo al carrito
              carrito.push(producto);
          }

          actualizarCarrito();
      }
   // Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}
    
      function añadirAlCarrito2() {
        const producto = {
            nombre: "Sudadera Indominus verde oscuro",
            precio: 50.99,
            imagen: "images/sudaderaverde.jpg",
            cantidad: 1
        };
        total += 50.99;
        // Buscar si el producto ya está en el carrito
        const productoExistente = carrito.find(item => item.nombre === producto.nombre);

        if (productoExistente) {
            // Si ya existe, incrementar el precio
            productoExistente.precio += producto.precio;
            productoExistente.cantidad++;
        } else {
            // Si no existe, agregarlo al carrito
            carrito.push(producto);
        }

        actualizarCarrito();
    }
  // Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}
    function añadirAlCarrito3() {
      const producto = {
          nombre: "Sudadera Indominus roja",
          precio: 25.99,
          imagen: "images/sudaderaroja.jpg",
          cantidad: 1
      };
      total += 25.99;
      // Buscar si el producto ya está en el carrito
      const productoExistente = carrito.find(item => item.nombre === producto.nombre);

      if (productoExistente) {
          // Si ya existe, incrementar el precio
          productoExistente.precio += producto.precio;
          productoExistente.cantidad++;
      } else {
          // Si no existe, agregarlo al carrito
          carrito.push(producto);
      }

      actualizarCarrito();
  }
 // Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}
  function añadirAlCarrito4() {
    const producto = {
        nombre: "Pantalón Indominus gris",
        precio: 80.99,
        imagen: "images/pantalongris.jpeg",
        cantidad: 1
    };
    total += 80.99;
    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        // Si ya existe, incrementar el precio
        productoExistente.precio += producto.precio;
        productoExistente.cantidad++;
    } else {
        // Si no existe, agregarlo al carrito
        carrito.push(producto);
    }

    actualizarCarrito();
}
// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}
function añadirAlCarrito5() {
  const producto = {
      nombre: "Pantalón Indominus negro",
      precio: 40.99,
      imagen: "images/pantalonnegro.jpg",
      cantidad: 1
  };
  total += 40.99;
  // Buscar si el producto ya está en el carrito
  const productoExistente = carrito.find(item => item.nombre === producto.nombre);

  if (productoExistente) {
      // Si ya existe, incrementar el precio
      productoExistente.precio += producto.precio;
      productoExistente.cantidad++;
  } else {
      // Si no existe, agregarlo al carrito
      carrito.push(producto);
  }

  actualizarCarrito();
}
// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}
function añadirAlCarrito6() {
  const producto = {
      nombre: "Pantalón Indominus azul",
      precio: 30.99,
      imagen: "images/pantalonazul.jpeg",
      cantidad: 1
  };
  total += 30.99;
  // Buscar si el producto ya está en el carrito
  const productoExistente = carrito.find(item => item.nombre === producto.nombre);

  if (productoExistente) {
      // Si ya existe, incrementar el precio
      productoExistente.precio += producto.precio;
      productoExistente.cantidad++;
  } else {
      // Si no existe, agregarlo al carrito
      carrito.push(producto);
  }

  actualizarCarrito();
}
// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}

// Función para agregar un producto al carrito
function añadirAlCarrito7() {
    const producto = {
        nombre: "Pantalón Indominus blanco",
        precio: 70.99,
        imagen: "images/pantalonblanco.jpeg",   
        cantidad: 1
    };

    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        // Si ya existe, incrementar la cantidad y actualizar el precio total
        productoExistente.cantidad++;
        total += producto.precio;
    } else {
        // Si no existe, agregarlo al carrito y sumar al precio total
        carrito.push(producto);
        total += producto.precio;
    }

    // Actualizar el carrito en la interfaz
    actualizarCarrito();
    
}

// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
    const producto = carrito[index];
    producto.cantidad++;
    total += producto.precio;
    actualizarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
    const producto = carrito[index];
    if (producto.cantidad > 1) {
        producto.cantidad--;
        total -= producto.precio;
        actualizarCarrito();
    }
}
// funcion de actualizar el carrito
function actualizarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = ""; // Limpiar el contenido actual del carrito

    // Recorrer cada producto en el carrito y mostrarlo en la interfaz
    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement("div");

        // Crear y añadir la imagen
        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.height = 100;
        imagen.width = 100;
        imagen.style.display = 'block';
        imagen.style.margin = '0 auto';
        imagen.style.border = '2px solid black';
        productoDiv.appendChild(imagen);

        // Crear un div para centrar el nombre del producto
        const nombreDiv = document.createElement("div");
        nombreDiv.textContent = producto.nombre;
        nombreDiv.style.textAlign = 'center'; // Centrar el nombre del producto
        nombreDiv.style.color = 'black'; // Poner el nombre en negro
        nombreDiv.style.fontSize = '18px';// hacer el nombre del producto más grande
        productoDiv.appendChild(nombreDiv);

        // Crear y añadir el precio y la cantidad en líneas separadas
        const precioCantidadDiv = document.createElement("div");
        precioCantidadDiv.style.textAlign = 'center'; // Centrar el precio y la cantidad

        const precioProducto = document.createElement("span");
        const parteEntera = Math.floor(producto.precio).toFixed(0); // Parte entera del precio
        const parteDecimal = (producto.precio % 1).toFixed(2).substring(1); // Parte decimal del precio
        precioProducto.innerHTML = `  $${parteEntera}<span style="color: red;">${parteDecimal}</span>`;
        precioProducto.style.fontWeight = 'bold'; // Poner el precio en negrita
        precioProducto.style.fontSize = '16px'; // Hacer el precio más grande
        precioCantidadDiv.appendChild(precioProducto);

        const cantidadProducto = document.createElement("span");
        cantidadProducto.textContent = ` (${producto.cantidad})`;
        cantidadProducto.style.fontStyle = 'italic'; // Poner la cantidad en cursiva
        precioCantidadDiv.appendChild(cantidadProducto);

        productoDiv.appendChild(precioCantidadDiv);

        // Añadir botones para aumentar, disminuir y limpiar el producto
        productoDiv.innerHTML += `
            <button class="boton-aumentar" onclick="aumentarCantidad(${index})">+</button>
            <button class="boton-disminuir" onclick="disminuirCantidad(${index})">-</button>
            <button class="boton-limpiar" onclick="limpiarProducto(${index})">Limpiar Producto</button>
        `;

        // Añadir el div del producto al div del carrito
        carritoDiv.appendChild(productoDiv);
    });

    // Mostrar el total del carrito

    // Crear un nuevo elemento hr
    var lineaHorizontal = document.createElement('hr');

    // Establecer los estilos del elemento hr
    lineaHorizontal.style.width = '100%';
    lineaHorizontal.style.height = '3px';
    lineaHorizontal.style.backgroundColor = '#1d4566';
    lineaHorizontal.style.border = 'none';

    const totalDiv = document.createElement("div");
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
    totalDiv.style.fontWeight = "bold";
    totalDiv.style.marginLeft = "72px";
    totalDiv.style.fontSize = "18px";

    carritoDiv.appendChild(lineaHorizontal);
    carritoDiv.appendChild(totalDiv);
}

// Función para limpiar un producto específico del carrito
function limpiarProducto(index) {
    const producto = carrito[index];
    total -= producto.precio * producto.cantidad; // Restar el precio total de este producto
    carrito.splice(index, 1); // Eliminar el producto del carrito
    actualizarCarrito(); // Actualizar el carrito en la interfaz
}
// Función para limpiar todo el carrito
function limpiarCarrito() {
    carrito = []; // Vaciar el arreglo de carrito
    total = 0; // Reiniciar el total a cero
    actualizarCarrito(); // Actualizar el carrito en la interfaz
}