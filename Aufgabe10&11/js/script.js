var todoArray = [];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var counterOpenDOMElement;
var counterDoneDOMElement;
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterOpenDOMElement = document.querySelector("#counterOpen");
    counterDoneDOMElement = document.querySelector("#counterDone");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + todoArray[index].todosText +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < todoArray.length; index++) {
        _loop_1(index);
    }
    updateCounter();
    updateCounterOpen();
    updateCounterDone();
}
function updateCounter() {
    counterDOMElement.innerHTML = todoArray.length + " in total";
}
function updateCounterOpen() {
    var open = 0;
    for (var index = 0; index < todoArray.length; index++) {
        if (todoArray[index].todosChecked == false)
            open++;
    }
    counterOpenDOMElement.innerHTML = open + " tasks open";
}
function updateCounterDone() {
    var done = 0;
    for (var index = 0; index < todoArray.length; index++) {
        if (todoArray[index].todosChecked == true)
            done++;
    }
    counterDoneDOMElement.innerHTML = done + " tasks done";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        todoArray.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todoArray[index].todosChecked = !todoArray[index].todosChecked;
    drawListToDOM();
}
function deleteTodo(index) {
    todoArray.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map