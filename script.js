window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const listEl = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    // Adding new task to list

    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");

    taskEl.appendChild(taskContentEl);

    // Adding new task text

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
    taskInputEl.value = task;
    taskInputEl.setAttribute("readonly", "readonly");

    taskContentEl.appendChild(taskInputEl);

    // Adding buttons to task

    const taskActionsEl = document.createElement("div");
    taskActionsEl.classList.add("actions");

    const taskEditEl = document.createElement("button");
    taskEditEl.classList.add("edit");
    taskEditEl.innerHTML = "edit";

    const taskDeleteEl = document.createElement("button");
    taskDeleteEl.classList.add("delete");
    taskDeleteEl.innerHTML = "delete";

    taskActionsEl.appendChild(taskEditEl);
    taskActionsEl.appendChild(taskDeleteEl);

    taskEl.appendChild(taskActionsEl);

    listEl.appendChild(taskEl);

    // Cleaning the form for new task

    input.value = "";

    // Switching Edit button

    taskEditEl.addEventListener("click", (e) => {
      if (taskEditEl.innerText.toLowerCase() == "edit") {
        taskEditEl.innerText = "Save";
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
      } else {
        taskEditEl.innerText = "Edit";
        taskInputEl.setAttribute("readonly", "readonly");
      }
    });

    // Removing task from the list

    taskDeleteEl.addEventListener("click", (e) => {
      listEl.removeChild(taskEl);
    });

    // Marking task as completed

    taskContentEl.addEventListener("click", (e) => {
      if (!taskEl.classList.contains("completed")) {
        taskEl.classList.add("completed");
      } else {
        taskEl.classList.remove("completed");
      }
    });
  });
});
