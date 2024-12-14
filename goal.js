const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const formEl = document.getElementById("focus-form");
const focusText = document.getElementById("focus-text");
const focusInput = document.getElementById("focus-input");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = focusInput.value;
    focusText.textContent = `${inputValue}`;
    focusInput.value = "";
})

function addTask() {
    if (inputBox.value === '') {
        alert("Add tasks!");
    } else {
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();