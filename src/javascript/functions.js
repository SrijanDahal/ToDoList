import { objects } from "./card";

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
  cancelandSubmitButtons(classname);

  // Creating the textboxes for the form to take users input
  function textboxes() {
    const textBoxes = ["title", "description", "dueDate"];
    textBoxes.forEach((textBox) => {
      const input = document.createElement("input");
      input.classList.add(textBox);
      if (textBox === "dueDate") {
        input.type = "date";
      } else {
        input.type = "text";
        input.style.width = "30vw";
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
    submitButton(classname);
    createCancelButton(classname);

    // Creating the submit button for the form to submit the users input
    function submitButton(classname) {
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
  const inputs = document.querySelectorAll("input");
  formdiv.style.display = "none";
  inputs.forEach((input) => {
    input.value = "";
  });
}

function areInputsEmpty(inputs) {
  if (inputs.value.trim() === "") {
    return true; // Return true if any input is empty
  }
  return false; // Return false if all inputs have values
}

// Creating a function that would create a cancel button for the form
export const cancelButton = function cancelButton(formDiv) {
  const cancelButtons = document.querySelectorAll(".cancelButton");
  cancelButtons.forEach((cancelButton) => {
    cancelButton.addEventListener("click", (e) => {
      display();
    });
  });
};

export const submitButton = function submitButton(formDiv, type) {
  const submitButtons = document.querySelectorAll(".submitButton");
  const inputs = document.querySelectorAll("input");
  const title = document.querySelectorAll(".title");
  const description = document.querySelectorAll(".description");
  const dueDate = document.querySelectorAll(".dueDate");

  submitButtons[0].addEventListener("click", (e) => {
    if (
      areInputsEmpty(title[0]) ||
      areInputsEmpty(description[0]) ||
      areInputsEmpty(dueDate[0])
    ) {
      alert("Please fill in all fields");
    } else {
      objects.project.title.push(title[0].value);
      objects.project.description.push(description[0].value);
      objects.project.dueDate.push(dueDate[0].value);
      console.log(objects.project);
      display(formDiv);
    }
  });
};
