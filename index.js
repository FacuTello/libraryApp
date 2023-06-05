// Creo el array vacio
let myLibrary = [];

// Creo el constructor del libro
function Book(title, author, pages, wasRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.wasRead = wasRead,
    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.wasRead ? 'read' : 'unread'}`);
    }
}

// Selecciono el boton en el DOM y luego elijo el boton para que se ejecute la funcion
addToArrayButton = document.querySelector('#agregarArray');
addToArrayButton.addEventListener('click', addToArray);

function addToArray(){
    // Estas lineas toman el ingreso del usuario en el input y lo asignan a una variable
    capturaNombre = document.getElementById("nombreLibro").value;
    capturaAutor = document.getElementById("autorLibro").value;
    capturaPaginas = document.getElementById("paginasLibro").value;

    // Se crea un nuevo libro con las variables tomadas del usuario y se ingresan al array
    nuevoLibro = new Book(capturaNombre, capturaAutor, capturaPaginas, false);
    myLibrary.push(nuevoLibro);
    console.log(myLibrary)
    
    // Se crea el for que recorre el array e imprime las tarjetas necesarias

    for (let i= 0; i < myLibrary.length; i++){
    // Creo el div en donde van a aparecer las tarjetas
        const card = document.querySelector(".cards-container");
        const div = document.createElement('div');
        card.appendChild(div);

        const pnombre = document.createElement('p');
        const textoNombre = `Nombre: ${capturaNombre}` ;
        pnombre.textContent = textoNombre;
        div.appendChild(pnombre);

        const pAutor = document.createElement('p');
        const textoAutor = `Autor: ${capturaAutor}`;
        pAutor.textContent = textoAutor;
        div.appendChild(pAutor);

        const pPaginas = document.createElement('p');
        const textoPaginas = `Paginas : ${capturaPaginas}`;
        pPaginas.textContent = textoPaginas;
        div.appendChild(pPaginas);
    }

    

}



