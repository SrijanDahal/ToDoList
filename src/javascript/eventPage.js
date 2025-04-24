import { form, buttonstyles, cancelButton } from "./functions.js";

export function eventPage() {
  // Created a container for the project page
  const container = document.createElement("div");
  container.className = "container-eventPage";
  container.style.display = "block";

  // Calling the functions that would create the content for the project page
  eventPageTitle();
  button();
  formEvent();

  // Creating a fucntion that would add title to the page
  function eventPageTitle() {
    const title = document.createElement("h1");
    title.style.textAlign = "center";
    title.className = "title-eventPage";
    title.textContent = "My Events";
    container.appendChild(title);
  }

  // Creating a function for the form
  function formEvent() {
    const formProject = form("eventPageForm", "formId2");
    formProject.style.display = "none";
    container.appendChild(formProject);
  }

  // Creating a function that would add a button to the page
  function button() {
    // Added the the add project button to the page
    const button = buttonstyles("button-eventPage", "Add Events");
    container.appendChild(button);

    // Adding an event listener to the button that would display a form
    button.addEventListener("click", () => {
      const formDiv = document.querySelector(".eventPageForm");
      formDiv.style.display = "block";
      // Creating a cancel button for the form to cancel the filling of the form
      cancelButton(formDiv);
    });
  }

  return container;
}
