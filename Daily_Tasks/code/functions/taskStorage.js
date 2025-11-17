export let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

export function saveTasks() {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
}