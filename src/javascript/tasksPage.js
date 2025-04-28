import { form, buttonstyles, cancelButton, submitButton } from "./functions.js";

export function tasksPage() {
  // Created a container for the project page
  const container = document.createElement("div");
  container.className = "container-tasksPage";
  container.style.display = "block";

  // Calling the functions that would create the content for the project page
  tasksPage();
  button();
  formTasks();

  // Creating a fucntion that would add title to the page
  function tasksPage() {
    const title = document.createElement("h1");
    title.style.textAlign = "center";
    title.className = "title-tasksPage";
    title.textContent = "My Tasks";
    container.appendChild(title);
  }

  // Creating a function for the form
  function formTasks() {
    const formTasks = form("tasksPageForm", "formId1");
    formTasks.style.display = "none";
    container.appendChild(formTasks);
  }

  // Creating a function that would add a button to the page
  function button() {
    // Added the the add project button to the page
    const button = buttonstyles("button-tasksPage", "Add tasks");
    container.appendChild(button);

    // Adding an event listener to the button that would display a form
    button.addEventListener("click", () => {
      const formDiv = document.querySelector(".tasksPageForm");
      formDiv.style.display = "block";
      // Creating a cancel button for the form to cancel the filling of the form
      cancelButton(formDiv);
      submitButton(formDiv, "task");
    });
  }

  return container;
}
