var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from input element
    var username = nameInputEl.value.trim();

    // check if there is input
    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    }
    else {
        alert('Please enter a GitHub username');
    }
};

var getUserRepos = function (user) {
    // format the github api url
    var apiUrl = 'https://api.github.com/users/' + user + '/repos';

    // make a request to the url
    fetch(apiUrl).then(function (response) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

userFormEl.addEventListener('submit', formSubmitHandler);