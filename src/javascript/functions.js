import { objects, createCard } from "./card";

export const form = function form(classname, idname) {
  // Creating a div for the form
  const div = document.createElement("div");
  div.className = classname;
  div.id = idname;
  div.style.display = "none";

  // Creating a form for the page
  const form = document.createElement("form");
  form.style.display = "flex";
  form.style.flexDirection = "column";

  // Calling the functions that would create textboxes and a submit button
  textboxes();
  cancelandSubmitButtons();

  // Creating the textboxes for the form to take users input
  function textboxes() {
    const textBoxes = ["title", "description", "dueDate"];
    textBoxes.forEach((textBox) => {
      const input = document.createElement("input");
      input.classList.add(textBox);
      if (textBox === "dueDate") {
        input.type = "date";
        input.name = "dueDate";
      } else {
        if (textBox === "description") {
          input.name = "description";
          input.type = "text";
          input.style.width = "30vw";
        } else {
          input.name = "title";
          input.type = "text";
          input.style.width = "30vw";
        }
      }
      input.required = true;
      input.placeholder = textBox;
      input.style.width = "20vw";
      input.style.marginTop = "10px";
      input.style.marginBottom = "10px";
      form.appendChild(input);
    });
  }
  // Creating the submit button for the form
  function cancelandSubmitButtons() {
    const divforButtons = document.createElement("div");
    divforButtons.style.display = "flex";
    divforButtons.style.flexDirection = "row";

    // Calling the functions that would create the submit and cancel buttons
    submitButton();
    createCancelButton();

    // Creating the submit button for the form to submit the users input
    function submitButton() {
      const submitButton = buttonstyles("submitButton", "Submit");
      submitButton.style.backgroundColor = "green";

      // Adding the submit button to the div for buttons
      divforButtons.appendChild(submitButton);
    }

    // Creating the cancel button for the form to cancel the filling of the form
    function createCancelButton() {
      const cancelButton = buttonstyles("cancelButton", "Cancel");
      cancelButton.style.backgroundColor = "green";
      // Adding the cancel button to the div for buttons
      divforButtons.appendChild(cancelButton);
    }
    form.appendChild(divforButtons);
  }
  div.appendChild(form);

  return div;
};

export const buttonstyles = function buttonstyles(classname, textContent) {
  const button = document.createElement("button");
  button.className = classname;
  button.textContent = textContent;
  button.style.backgroundColor = "red";
  button.style.margin = "5px";
  button.style.width = "7vw";
  button.style.overflow = "hidden";
  button.style.height = "5vh";
  button.style.color = "white";
  button.style.border = "1px solid red";
  button.style.borderRadius = "5px";
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
  return button;
};

function display(formdiv) {
  const inputs = formdiv.querySelectorAll("input");
  formdiv.style.display = "none";
  inputs.forEach((input) => {
    input.value = ""; // Clear input values
  });
}

function areInputsEmpty(inputs) {
  return Array.from(inputs).some((input) => input.value.trim() === "");
}

// Creating a function that would create a cancel button for the form
export const cancelButton = function cancelButton(formDiv) {
  const cancelButtons = formDiv.querySelector(".cancelButton");

  // Remove any existing event listener to prevent duplication
  const newCancelButton = cancelButtons.cloneNode(true);
  cancelButtons.parentNode.replaceChild(newCancelButton, cancelButtons);

  newCancelButton.addEventListener("click", () => {
    display(formDiv);
  });
};

export const submitButton = function submitButton(formDiv, type) {
  const submitButtons = formDiv.querySelector(".submitButton");
  const inputs = formDiv.querySelectorAll("input");

  // Remove any existing event listener to prevent duplication
  const newSubmitButton = submitButtons.cloneNode(true);
  submitButtons.parentNode.replaceChild(newSubmitButton, submitButtons);

  newSubmitButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if any input is empty
    if (areInputsEmpty(inputs)) {
      alert("Please fill in all fields");
      return; // Stop further execution if inputs are empty
    }
    // Proceed with form submission logic
    const [title, description, dueDate] = inputs;
    if (type === "project") {
      objects.project.title.push(title.value);
      objects.project.description.push(description.value);
      objects.project.dueDate.push(dueDate.value);
      // Call the card function to create a new card
      const card = createCard(type);
      // Append the new card to the project page
      const containerprojectPage = document.querySelector(
        ".container-projectPage"
      );
      containerprojectPage.appendChild(card);
      // Log the project object to the console
      console.log(objects.project);
    } else if (type === "task") {
      objects.task.title.push(title.value);
      objects.task.description.push(description.value);
      objects.task.dueDate.push(dueDate.value);
      console.log(objects.task);
    } else if (type === "event") {
      objects.event.title.push(title.value);
      objects.event.description.push(description.value);
      objects.event.dueDate.push(dueDate.value);
      console.log(objects.event);
    }

    // Hide the form and clear inputs
    display(formDiv);
  });
};
