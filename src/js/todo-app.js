
const form = document.querySelector("#task-form"); // form of input text
const input = document.querySelector("#task-input"); // input text
const list_container = document.querySelector("#tasks"); // div contaier of text
const clear_all = document.querySelector(".clear-all");
const msg = document.querySelector('.msg');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    const formValidation = () => {
        if (task.trim() === "") {
            msg.innerHTML = "Please fill out the task";
            return false;
        } else {
            msg.innerHTML = "";
            return true;
        }
    }

    if (!formValidation()) {
        return;
    }

    input.value = "";


    const task_container = document.createElement("div");
    task_container.classList.add("task");

    const task_content_container = document.createElement("div");
    task_content_container.classList.add("content");

    task_container.appendChild(task_content_container);

    const labelCbx = document.createElement("label");
    labelCbx.classList.add("cl-checkbox");
    const input_cbx = document.createElement("input");
    input_cbx.classList.add("checkbox");
    input_cbx.checked = false; // it puts initially check
    input_cbx.type = "checkbox";
    const span = document.createElement("span");
    span.classList.add("span");

    task_content_container.appendChild(labelCbx);
    labelCbx.appendChild(input_cbx);
    labelCbx.appendChild(span);


    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");

    task_content_container.appendChild(task_input);

    const task_actions = document.createElement("div");
    task_actions.classList.add("actions");

    // edit
    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerHTML = "Edit";
    // edit

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerHTML = "Delete";

    task_actions.appendChild(task_edit);
    task_actions.appendChild(task_delete);
    task_container.appendChild(task_actions);
    list_container.appendChild(task_container);

    task_edit.addEventListener('click', () => {
        if (task_edit.innerText.toLowerCase() == "edit") {
            task_input.removeAttribute("readonly");
            task_input.focus();
            task_edit.innerText = "Save";
        } else {
            task_input.setAttribute("readonly", "readonly");
            task_edit.innerText = "Edit";
        }
    });

    task_delete.addEventListener('click', () => {
        task_container.style.opacity = 0; // Set the opacity to 0 to trigger the CSS transition
  setTimeout(() => {
    list_container.removeChild(task_container); // Remove the element from the DOM after the transition is complete
  }, 500);
    })

    clear_all.addEventListener('click', () => {
        task_container.style.opacity = 0;
        setTimeout(()=> {

            list_container.innerHTML = "";
        }, 500);
      });

});


