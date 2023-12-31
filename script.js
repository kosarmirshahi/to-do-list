"use srtict";
const addBtn = document.querySelector(".addBtn");
const insertInput = document.querySelector(".writeToDoInpute");
const todoList = document.querySelector(".toDoContainer");
const closeBtn = document.querySelector(".closeBtn");
const numberOfAll = document.querySelector(".numberOfAll");
const noTodos = document.querySelector(".noTodos");
const checkbox = document.querySelector(".checkbox");

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
      e.target.nextElementSibling.classList.toggle("textCheck");
      saveData();
    } else if (e.target.tagName === "BUTTON") {
      e.target.parentElement.parentElement.remove();
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
