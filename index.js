
let myLibrary = [];

function Book(title, author, pages, wasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.wasRead = wasRead;
  this.info = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.wasRead ? 'read' : 'unread'}`);
  };
  
}

const addToArrayButton = document.querySelector('#agregarArray');
addToArrayButton.addEventListener('click', addToArray);

function addToArray() {
  let capturaNombre = document.getElementById('nombreLibro').value;
  let capturaAutor = document.getElementById('autorLibro').value;
  let capturaPaginas = document.getElementById('paginasLibro').value;
  let capturaRead = document.getElementById('checkbox').checked;

  const nuevoLibro = new Book(capturaNombre, capturaAutor, capturaPaginas, capturaRead);
  myLibrary.push(nuevoLibro);
  console.log(myLibrary);
 
  const card = document.querySelector('.cards-container');
  const div = document.createElement('div');
  div.classList.add('card');
  card.appendChild(div);

  const pnombre = document.createElement('p');
  pnombre.classList.add('cardText');
  const textoNombre = `Nombre: ${capturaNombre}`;
  pnombre.textContent = textoNombre;
  div.appendChild(pnombre);

  const pAutor = document.createElement('p');
  pAutor.classList.add('cardText');
  const textoAutor = `Autor: ${capturaAutor}`;
  pAutor.textContent = textoAutor;
  div.appendChild(pAutor);

  const pPaginas = document.createElement('p');
  pPaginas.classList.add('cardText');
  const textoPaginas = `Páginas: ${capturaPaginas}`;
  pPaginas.textContent = textoPaginas;
  div.appendChild(pPaginas);

  const pIsRead = document.createElement('p');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
   const capturaCheckbox = document.getElementById('checkbox');
  checkbox.checked = capturaCheckbox.checked;
  const label = document.createElement('label');
  const labelText = document.createTextNode('Read');
  label.appendChild(checkbox);
  label.appendChild(labelText);
  pIsRead.appendChild(label);
  div.appendChild(pIsRead);


  const pBoton = document.createElement('p');
  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('btn-primary');
  buttonDelete.classList.add('btn');
  buttonDelete.textContent = 'Eliminar Libro';
  buttonDelete.classList.add('btn-delete');
  pBoton.appendChild(buttonDelete);
  div.appendChild(pBoton);
  
  
  buttonDelete.addEventListener('click', deleteBook);

  capturaNombre = document.getElementById('nombreLibro').value = '';
  capturaAutor = document.getElementById('autorLibro').value = '';
  capturaPaginas = document.getElementById('paginasLibro').value = '';
  capturaRead = document.getElementById('checkbox').checked = false;
}

function deleteBook() {
    const div = this.parentElement.parentElement;
    div.remove();
  
    const index = parseInt(this.dataset.index);
    myLibrary.splice(index, 1);
  }

  






