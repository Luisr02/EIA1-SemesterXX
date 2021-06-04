
interface todoItem {
    todosText: string;
    todosChecked: boolean;
}

let todoArray: todoItem [] =
[];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var counterOpenDOMElement: HTMLElement;
var counterDoneDOMElement: HTMLElement;

declare var Artyom: any;

window.addEventListener("load", function(): void {
    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterOpenDOMElement = document.querySelector("#counterOpen");
    counterDoneDOMElement = document.querySelector("#counterDone");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
    
    const artyom: any = new Artyom();
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
          todoArray.unshift({
              todosText: wildcard,
              todosChecked: false
          });
          drawListToDOM();
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            artyom.say("Deine Aufgabe" + wildcard + " wurde ergänzt");
        }
    });
    document.querySelector("#SprachEingabe").addEventListener("click", function (): void {
        artyom.say("Spracheingabe ist aktiviert");
        startContinuousArtyom();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todoArray.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + todoArray[index].todosText +
                            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
    updateCounterOpen();
    updateCounterDone();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todoArray.length + " in total";
}

function updateCounterOpen(): void {
    var open: number = 0;
    for (var index: number = 0; index < todoArray.length; index++) {
        if (todoArray[index].todosChecked == false)
        open++;
    }
    counterOpenDOMElement.innerHTML = open + " tasks open";
}

function updateCounterDone(): void {
    var done: number = 0;
    for (var index: number = 0; index < todoArray.length; index++) {
        if (todoArray[index].todosChecked == true)
        done++;
    }
    counterDoneDOMElement.innerHTML = done + " tasks done";
}

function addTodo(): void {

    if (inputDOMElement.value != "") {
       
        todoArray.unshift({
            
            todosText: inputDOMElement.value,
            todosChecked: false});
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    todoArray[index].todosChecked = !todoArray[index].todosChecked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    
    todoArray.splice(index, 1);
    drawListToDOM();
}
})