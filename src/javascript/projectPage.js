export function projectPage() {
    // Created a container for the project page
    const container  = document.createElement('div');
    container.className = 'container-projectPage';
    container.style.display = 'block';

    // Creating a dictonary to store the content for the card
    const cardContent = {
        title: [],
        description: [],
        dueDate: [],
    }

    // Calling the functions that would create the content for the project page
    projectPageTitle();
    cardsForThePage();
    button();
    form();

    // Creating a fucntion that would add title to the page
    function projectPageTitle() {
        const title = document.createElement('h1');
        title.style.textAlign = 'center';
        title.className = 'title-projectPage';
        title.textContent = 'My Projects';
        container.appendChild(title);
    }   

    // Creating a function that would add a button to the page
    function button() {
        // Added the the add project button to the page
        const button = document.createElement('button');
        button.className = 'button-projectPage';
        button.textContent = 'Add Project';
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        button.style.border = '1px solid red';
        button.style.borderRadius = '5px';
        container.appendChild(button);

        // Adding an event listener to the button that would display a form
        button.addEventListener('click', () => {
            const formDiv = document.querySelector('.div-projectPage');
            formDiv.style.display = 'block';
        });
    }
        
    function form() {
        const div = document.createElement('div');
        div.className = 'div-projectPage';
        div.style.display = 'none';


        const form = document.createElement('form');
        form.id = 'form-projectPage';
        form.style.display = 'flex';
        form.style.flexDirection = 'column';

        textboxes();
        cancelandSubmitButtons();

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

            submitButton();
            cancelButton();

            cancelButton
            function submitButton() {
                const submitButton = document.createElement('button');
                submitButton.classList.add('submitButton-projectPage');
                submitButton.textContent = 'Submit';
                submitButton.style.width = '7vw';
                submitButton.style.height = '5vh';
                submitButton.style.backgroundColor = 'green';
                submitButton.style.color = 'white';
                submitButton.style.border = '1px solid red';
                submitButton.style.marginRight = '10px';
                submitButton.style.borderRadius = '5px';
                submitButton.addEventListener('click', () => {
                    event.preventDefault();
                });
                divforButtons.appendChild(submitButton);
            }

            
            function cancelButton() {
                const cancelButton = document.createElement('button');
                cancelButton.classList.add('submitButton-projectPage');
                cancelButton.textContent = 'Cancel';
                cancelButton.style.width = '7vw';
                cancelButton.style.height = '5vh';
                cancelButton.style.backgroundColor = 'green';
                cancelButton.style.color = 'white';
                cancelButton.style.border = '1px solid red';
                cancelButton.style.marginRight = '10px';
                cancelButton.style.borderRadius = '5px';
                cancelButton.addEventListener('click', () => {
                    event.preventDefault();
                    const formDiv = document.querySelector('.div-projectPage');
                    formDiv.style.display = 'none';
                });
                divforButtons.appendChild(cancelButton);
            }
            form.appendChild(divforButtons);
        }
        div.appendChild(form);
        container.appendChild(div);
    }

    // Creating a function that would create card for the page

    function cardsForThePage() {
        const card = document.createElement('div');
        card.className = 'card-projectPage';
        container.appendChild(card);
        

        // Calling the function that would create the content for the card
    }

    return container;
}