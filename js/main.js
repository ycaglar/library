const myLibrary = [];

class Book {
  constructor(title, author, publisher, year, read = false) {
    this.title = title
    this.author = author
    this.publisher = publisher
    this.year = year
    this.read = read
  }
}

function addBookToLibrary() {
  myLibrary.push(new Book('Lifespan', 'David Sinclair', 'Penguin Random House', '2019'))
}

const addBookButton = document.querySelector('#add-book');
const dialog = document.querySelector('#dialog');
const form = document.querySelector('#book-form');
const closeButton = document.querySelector('#close');

addBookButton.addEventListener('click', function () {
  dialog.showModal();
});

closeButton.addEventListener('click', function () {
  dialog.close();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  myLibrary.push(new Book(form.elements['title'].value,
    form.elements['author'].value,
    form.elements['publisher'].value,
    form.elements['year'].value));

  dialog.close('submit');

  // Place book onto the screen

  const book = document.createElement('article');
  book.classList.add('book');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = form.elements['title'].value;

  const author = document.createElement('p');
  author.classList.add('author');
  author.textContent = form.elements['author'].value;

  const remove = document.createElement('img');
  remove.setAttribute('src', '/assets/icons/minus-circle.png');
  remove.setAttribute('alt', 'Minus Circle');
  remove.setAttribute('class', 'remove');
  remove.setAttribute('title', 'Remove Book');

  remove.addEventListener('click', function (event) {
    remove.parentElement.remove();
  });

  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(remove);

  book.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 50%, 50%, 1)';

  document.querySelector('section.book-shelf').appendChild(book);
});