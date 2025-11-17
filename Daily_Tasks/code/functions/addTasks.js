import { Tasks, saveTasks } from "./taskStorage.js";
import { seeTasks } from "./seeTasks.js";

export function addTasks(titleTask, desTask, select) {

    let task = {
        id: Math.floor(Math.random() * 2000) + 1000,
        title: titleTask.value,
        description: desTask.value,
        category: select.value,
        state: false,
        dateCreate: new Date().toISOString(),
        dateEnd: ""
    };

    Tasks.push(task);
    saveTasks();

    titleTask.value = "";
    desTask.value = "";
    select.value = "";

    seeTasks();
}
