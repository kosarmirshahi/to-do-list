"use srtict";
const body = document.body;
const addBtn = document.querySelector(".addBtn");
const insertInput = document.querySelector(".writeToDoInpute");
const todoList = document.querySelector(".toDoContainer");
const todoElements = document.querySelectorAll(".todos");
const writeToDoForm = document.querySelector(".writeToDoForm");
const closeBtn = document.querySelector(".closeBtn");
const numberOfAll = document.querySelector(".numberOfAll");
const noTodos = document.querySelector(".noTodos");
const headerImgMoon = document.querySelector(".headerImgMoon");
const headerImgSun = document.querySelector(".headerImgSun");
const checkbox = document.querySelector(".checkbox");
const footer = document.querySelector(".Footer");

footer.classList.add("footerTodo");

let alltodos = [];
let allremoveTodos = [];
let allcompeleteTodos = [];
numberOfAll.textContent = 0;

if (alltodos.length === 0) {
  noTodos.style.display = "block";
}

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
function addTodos() {
  if (insertInput.value === "") {
    alert("Please write something");
  } else {
    const newTodoDiv = document.createElement("div");
    newTodoDiv.classList.add("todos");
    const rightTodoDiv = document.createElement("div");
    rightTodoDiv.classList.add("rightTodo");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    const todoText = document.createElement("p");
    todoText.textContent = insertInput.value;
    const closeButtonDiv = document.createElement("div");
    const closeButton = document.createElement("button");
    closeButton.classList.add("closeBtn");
    closeButton.innerHTML = "&#215;";

    rightTodoDiv.appendChild(checkbox);
    rightTodoDiv.appendChild(todoText);
    closeButtonDiv.appendChild(closeButton);
    newTodoDiv.appendChild(rightTodoDiv);
    newTodoDiv.appendChild(closeButtonDiv);
    todoList.appendChild(newTodoDiv);
    alltodos.push(newTodoDiv);
  }
  insertInput.value = "";
  noTodos.style.display = "none";
  numberOfAll.textContent = alltodos.length;
  saveData();
}
todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "INPUT") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "BUTTON") {
      e.target.parentElement.parentElement.remove();
      // alltodos.pop();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}
function showTodo() {
  todoList.innerHTML = localStorage.getItem("data");
}
showTodo();
headerImgMoon.addEventListener("click", function () {
  footer.classList.remove("footerTodo");
  footer.classList.add("footerTodoBlack");
  body.style.backgroundColor = "hsl(235, 21%, 11%)";
  writeToDoForm.style.backgroundColor = "hsl(235, 24%, 19%)";
  insertInput.style.backgroundColor = "hsl(235, 24%, 19%)";
  addBtn.style.backgroundColor = "hsl(235, 24%, 19%)";
  addBtn.style.color = "white";
  todoList.style.backgroundColor = "hsl(235, 24%, 19%)";
  checkbox.style.backgroundColor = "hsl(235, 24%, 19%)";
  closeBtn.style.backgroundColor = "red";
  footer.style.backgroundColor = "hsl(235, 24%, 19%)";
  headerImgMoon.style.display = "none";
  headerImgSun.style.display = "block";
});
