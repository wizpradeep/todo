const todoEvent = document.getElementById("todo-event");
const UL = document.getElementById("ul-id");
const listCrt = document.createElement("li");
const del = document.querySelectorAll("i");

todoEvent.addEventListener("keydown", function (event) {
  if (todoEvent.value != "" && todoEvent.value.length >= 3) {
    if (event.key == "Enter") {
      const newLi = document.createElement("li");
      const newI = document.createElement("i");
      (newLi.innerHTML = todoEvent.value), newLi.appendChild(newI);
      newI.classList.add("fa-solid", "fa-xmark");
      UL.appendChild(newLi);
      todoEvent.value = "";
      newI.addEventListener("click", function () {
        newI.parentElement.remove();
      });
    }
  }
});
