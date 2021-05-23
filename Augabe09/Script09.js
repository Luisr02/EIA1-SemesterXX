// neue Task
window.addEventListener("load", function () {
    document.querySelector("#addTask button").addEventListener("click", addTask);
    function addTask() {
        var li = document.createElement("li");
        var trash = document.createElement("i");
        trash.className = "far fa-trash-alt";
        var check = document.createElement("i");
        check.className = "far fa-circle";
        if (document.querySelector("input").value == "") {
            alert("Insert a Task");
        }
        else {
            document.querySelector("ul").appendChild(li);
            li.innerHTML = document.querySelector("input").value;
            setTimeout(function () {
                document.querySelector("input").value = "";
            }, 200);
        }
    }
});
// Icons
var checked = document.createElement("input");
checked.type = "checkbox";
checked.className = "checkIcon";
var deleteb = document.createElement("input");
checked.type = "delete";
checked.className = "deleteIcon";
//# sourceMappingURL=Script09.js.map