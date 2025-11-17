import { addTasks } from "./functions/addTasks.js";
import { seeTasks } from "./functions/seeTasks.js";
import { Tasks, saveTasks } from "./functions/taskStorage.js";

let titleTask = document.getElementById("titleTask");
let desTask = document.getElementById("desTask");
let select = document.getElementById("selCategory");
let btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", () => {
    addTasks(titleTask, desTask, select);
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        let id = e.target.dataset.id;
        let index = Tasks.findIndex(t => t.id == id);

        if (index !== -1) {
            let ok = confirm(`¿Eliminar la tarea "${Tasks[index].title}"?`);

            if (ok) {
                Tasks.splice(index, 1);
                saveTasks();
                seeTasks();
            }
        }
    }
});

document.addEventListener("change", (e) => {
    if (e.target.classList.contains("checkbox-custom")) {

        let id = e.target.dataset.id;
        let index = Tasks.findIndex(t => t.id == id);

        if (index !== -1) {
            let t = Tasks[index];

            t.state = !t.state;

            if (t.state) {
                t.dateEnd = new Date().toISOString();
            } else {
                t.dateCreate = new Date().toISOString();
                t.dateEnd = "";
            }

            saveTasks();
            seeTasks();
        }
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-save")) {

        let id = e.target.dataset.id;
        let index = Tasks.findIndex(t => t.id == id);

        if (index !== -1) {
            let li = e.target.closest("li");

            let newTitle = li.querySelector(".edit-title").value.trim();
            let newDesc = li.querySelector(".edit-desc").value.trim();

            if (newTitle === "" || newDesc === "") {
                alert("Los campos no pueden estar vacíos");
                return;
            }

            Tasks[index].title = newTitle;
            Tasks[index].description = newDesc;

            saveTasks();
            seeTasks();
        }
    }
});

seeTasks();
