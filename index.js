"use strict";
let todos = ["a", "b", "c", "d", "e"];
function addTodo(todoTitle) {
    let centerLoc = todos.length / 2;
    if (todos.length % 2 === 0) {
        todos.splice(centerLoc - 1, 2);
    }
    else if (todos.length !== 0) {
        todos.splice(Math.floor(centerLoc), 1);
    }
    else {
        // todos.push(todoTitle);
    }
    console.log("centerLoc =>", centerLoc);
    console.log("todos Length =>", todos.length);
    console.log("todos =>", todos);
    return todos;
}
function removeTodo(todoTitle) {
    todos.pop();
}
let todoTitle = "Todo 1";
addTodo(todoTitle);
// Table
console.clear();
console.log("Starting Table Loop");
var index = 1;
while (index <= 10) {
    console.log("5 * ", index, " = ", 5 * index);
    index++;
}
