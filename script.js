"use strict";
const addBtn = document.querySelector(".addBtn");
const insertInput = document.querySelector(".writeToDoInpute");
const todoList = document.querySelector(".toDoContainer");
const todoElements = document.querySelectorAll(".todos");
const closeBtn = document.querySelector(".closeBtn");

let insertInputValue = "";
let todos = [];
insertInput.addEventListener("input", function (event) {
  insertInputValue = event.target.value;
});

// todos.forEach((item) => {
//   // Create a div element
//   const divElement = document.createElement("div");
//   // Set the text content of the div to the array item
//   divElement.textContent = item;
//   // Append the div element to the outputDiv
//   todoList.appendChild(divElement);
// });

function addTodos() {
  const newTodoDiv = document.createElement("div");
  newTodoDiv.classList.add("todos");
  // Create the rightTodo div containing the checkbox and text
  const rightTodoDiv = document.createElement("div");
  rightTodoDiv.classList.add("rightTodo");
  // Create a checkbox input
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  // Create a paragraph for the todo text
  const todoText = document.createElement("p");
  todoText.textContent = insertInputValue; // Change this text as needed
  // Create a div for the close button
  const closeButtonDiv = document.createElement("div");
  // Create a close button
  const closeButton = document.createElement("button");
  closeButton.classList.add("closeBtn");
  //   closeButton.textContent = &#215;; // Use the close symbol you prefer

  // Add an event listener to the close button to remove the todo item when clicked
  //   closeButton.addEventListener("click", function () {
  //     todoList.removeChild(newTodoDiv);
  //   });

  // Append the checkbox and text to the rightTodo div
  rightTodoDiv.appendChild(checkbox);
  rightTodoDiv.appendChild(todoText);
  // Append the close button to the closeButtonDiv
  closeButtonDiv.appendChild(closeButton);
  // Append the rightTodo div and the closeButtonDiv to the new todo div
  newTodoDiv.appendChild(rightTodoDiv);
  newTodoDiv.appendChild(closeButtonDiv);
  // Append the new todo div to the todoList container
  todoList.appendChild(newTodoDiv);
  todos.push(newTodoDiv);
  return newTodoDiv;
}

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (insertInputValue !== "") {
    addTodos();
  } else {
    alert("Please write something");
  }
});
