import { Tasks } from "./taskStorage.js";

export function seeTasks() {
    document.querySelectorAll("ul").forEach(ul => ul.innerHTML = "");

    Tasks.forEach(task => {
        let list;
        let dateCreate = new Date(task.dateCreate).toLocaleDateString();
        let dateEnd = task.dateEnd ? new Date(task.dateEnd).toLocaleDateString() : "";

        if (!task.state) {
            if (task.category === "Staff") list = document.getElementById("list-staffEarring");
            if (task.category === "Work") list = document.getElementById("list-workEarring");
            if (task.category === "Study") list = document.getElementById("list-studyEarring");
            if (task.category === "Urgent") list = document.getElementById("list-urgentEarring");
        } else {
            if (task.category === "Staff") list = document.getElementById("list-staffFilled");
            if (task.category === "Work") list = document.getElementById("list-workFilled");
            if (task.category === "Study") list = document.getElementById("list-studyFilled");
            if (task.category === "Urgent") list = document.getElementById("list-urgentFilled");
        }

        let li = document.createElement("li");
        li.classList.add("tarea");

        if (task.state) {
            li.style.color = "green";
            li.style.textDecoration = "line-through";
        }

        if (!task.state) {
            li.innerHTML = `
                <input type="text" class="edit-title" data-id="${task.id}" value="${task.title}">
                <textarea class="edit-desc" data-id="${task.id}">${task.description}</textarea>

                <div class="task-footer">
                    <span class="task-date">Fecha: ${dateCreate}</span>

                    <button class="btn-save" data-id="${task.id}">Guardar</button>
                    <button class="btn-delete" data-id="${task.id}">Eliminar</button>

                    <input type="checkbox" class="checkbox-custom" data-id="${task.id}" ${task.state ? "checked" : ""}>
                </div>
            `;
        } else {
            li.innerHTML = `
                <strong>${task.title}</strong><br>
                ${task.description}<br>

                <div class="task-footer">
                    <span class="task-date">Fecha de Creación: ${dateCreate}</span>
                    <span class="task-date">Finalización: ${dateEnd}</span>

                    <button class="btn-delete" data-id="${task.id}">Eliminar</button>
                    <input type="checkbox" class="checkbox-custom" data-id="${task.id}" checked>
                </div>
            `;
        }

        list.appendChild(li);
    });
}
