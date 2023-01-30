const openModal = document.getElementById('btn');
const submit = document.getElementById('btn11');
const modal = document.getElementById('dialog');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('number');
const bookGrid = document.getElementById('bookGrid');

// shows the modal of add a book
openModal.addEventListener('click', function(){
    modal.showModal();
});

// stores the user input in the card
submit.addEventListener('click', function(){
    var card = document.createElement('div');
    card.classList.add('card');
    bookGrid.appendChild(card);
    var tit = document.createElement('p');
    tit.innerText = title.value;
    card.appendChild(tit); // attaches the user input value to the card
    var auth = document.createElement('p');
    auth.innerText = author.value;
    card.appendChild(auth); // attaches the user input value to the card
    var page = document.createElement('p');
    page.innerText = pages.value;
    card.appendChild(page); // attaches the user input value to the card
    modal.close(); // closes the modal
    document.getElementById('form').reset(); // resets the form
})



