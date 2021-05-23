// neue Task
window.addEventListener("load", function (): void {
    document.querySelector("#addTask button").addEventListener("click", addTask); 
    function addTask(): void {
        let li: HTMLElement = document.createElement("li");
        const trash: HTMLElement = document.createElement("i");
        trash.className = "far fa-trash-alt";
        const check: HTMLElement = document.createElement("i");
        check.className = "far fa-circle";
        
        if (document.querySelector("input").value == "") {
            alert("Insert a Task");
        }
       
        else {document.querySelector("ul").appendChild(li);
              li.innerHTML = document.querySelector("input").value;
              setTimeout(function (): void {
                document.querySelector("input").value = "";
            },           200);
        }
    }
});

// Icons

let checked: HTMLInputElement = document.createElement("input");
checked.type = "checkbox";
checked.className = "checkIcon";

let deleteb: HTMLInputElement = document.createElement("input");
checked.type = "delete";
checked.className = "deleteIcon";



