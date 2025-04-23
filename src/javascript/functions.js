export const form = function form(classname, idname) {
    // Creating a div for the form
    const div = document.createElement('div');
    div.className = classname;
    div.style.display = 'none';

    // Creating a form for the page
    const form = document.createElement('form');
    form.id = idname;
    form.style.display = 'flex';
    form.style.flexDirection = 'column';

    // Calling the functions that would create textboxes and a submit button
    textboxes();
    cancelandSubmitButtons(classname);

    // Creating the textboxes for the form to take users input
    function textboxes() {
        const textBoxes = ['title', 'description', 'dueDate'];
        textBoxes.forEach((textBox) => {
            const input = document.createElement('input');
            input.classList.add(textBox);
            if (textBox === 'dueDate') {
                input.type = 'date';
            }

            else {
                input.type = 'text';
                input.style.width = '30vw';
            }
            input.placeholder = textBox;
            input.style.width = '30vw';
            input.style.marginTop = '10px';
            input.style.marginBottom = '10px';
            form.appendChild(input);
        });
    }
    // Creating the submit button for the form
    function cancelandSubmitButtons() {
        const divforButtons = document.createElement('div');
        divforButtons.style.display = 'flex';
        divforButtons.style.flexDirection = 'row';

        // Calling the functions that would create the submit and cancel buttons
        submitButton(classname);
        cancelButton(classname);

        // Creating the submit button for the form to submit the users input
        function submitButton(classname) {
            const submitButton = document.createElement('button');
            if(classname === 'projectPage') {
                submitButton.classList.add('submitButton-projectPage');
            }

            else if(classname === 'tasksPage') {
                submitButton.classList.add('submitButton-tasksPage');
            }

            else if(classname === 'eventsPage') {
                submitButton.classList.add('submitButton-eventsPage');
            }
            submitButton.textContent = 'Submit';
            submitButton.style.width = '7vw';
            submitButton.style.height = '5vh';
            submitButton.style.backgroundColor = 'green';
            submitButton.style.color = 'white';
            submitButton.style.border = '1px solid red';
            submitButton.style.marginRight = '10px';
            submitButton.style.borderRadius = '5px';
            submitButton.addEventListener('click', (e) => {
                event.preventDefault();
            });
            // Adding the submit button to the div for buttons
            divforButtons.appendChild(submitButton);
        }

        // Creating the cancel button for the form to cancel the filling of the form
        function cancelButton(classname) {
            const cancelButton = document.createElement('button');
            if(classname === 'projectPage') {
                cancelButton.classList.add('cancelButton-projectPage');
            }

            else if(classname === 'tasksPage') {
                cancelButton.classList.add('cancelButton-tasksPage');
            }

            else if(classname === 'eventsPage') {
                cancelButton.classList.add('cancelButton-eventsPage');
            }
            cancelButton.textContent = 'Cancel';
            cancelButton.style.width = '7vw';
            cancelButton.style.height = '5vh';
            cancelButton.style.backgroundColor = 'green';
            cancelButton.style.color = 'white';
            cancelButton.style.border = '1px solid red';
            cancelButton.style.marginRight = '10px';
            cancelButton.style.borderRadius = '5px';
            cancelButton.addEventListener('click', (e) => {
                event.preventDefault();
                document.querySelector(classname).style.display = 'none';
            });
            // Adding the cancel button to the div for buttons
            divforButtons.appendChild(cancelButton);
        }
        form.appendChild(divforButtons);
    }
    div.appendChild(form);

    return div;
}


export const buttonstyles = function buttonstyles(classname, textContent) {
    const button = document.createElement('button');
    button.className = classname;
    button.textContent = textContent;
    button.style.backgroundColor = 'red';
    button.style.width = '10vw';
    button.style.height = '5vh';
    button.style.color = 'white';
    button.style.border = '1px solid red';
    button.style.borderRadius = '5px';
    return button;
}

