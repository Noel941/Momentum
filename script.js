// User Story #1: As a user I want to put my name on the homepage

// User Story #2: As a user I want to see the current time on the homepage

// User Story #3: As a user I want to see a greeting with my inputted name on the homepage

// User Story #4: As a user I want to add my main focus for today on the homepage and display it also on the same page

// User Story #5: As a user I want to see a random quote on the homepage

// User Story #6: As a user I want to add a todo list on the homepage and is able to see the list on the same page

// User Story #7: As a user I want to add a new quote for my momentum app

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting-container");
const focus = document.getElementById("focus");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem("username");



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 0 && hours < 12) {
        greeting.innerText = `Good Morning, ${username}.`;
    } else if (hours >= 12 && hours < 17) {
        greeting.innerText = `Good Afternoon, ${username}.`;
    } else {
        greeting.innerText = `Good Evening, ${username}.`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
