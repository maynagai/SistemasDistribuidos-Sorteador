var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('num');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function() {
    create(nameInput.value, ageInput.value);
});

// Função para criar um registro no Firebase
function create(name, number) {
    var data = {
        name: name,
        number: number,
    };

    return firebase.database().ref().child('users').push(data);
}