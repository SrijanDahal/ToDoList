export function projectPage() {
    // Created a container for the project page
    const container  = document.createElement('div');
    container.className = 'container-projectPage';
    container.style.display = 'block';

    // Creating a dictonary to store the content for the card
    const cardContent = {
        title: ['default'],
        description: ['default'],
        dueDate: ['deafult'],
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
        button.style.width = '10vw';
        button.style.height = '5vh';
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


    // Creating a function that would create a form for the page        
    function form() {
        // Creating a div for the form
        const div = document.createElement('div');
        div.className = 'div-projectPage';
        div.style.display = 'none';

        // Creating a form for the page
        const form = document.createElement('form');
        form.id = 'form-projectPage';
        form.style.display = 'flex';
        form.style.flexDirection = 'column';

        // Calling the functions that would create textboxes and a submit button
        textboxes();
        cancelandSubmitButtons();

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
            submitButton();
            cancelButton();

            // Creating the submit button for the form to submit the users input
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

                    // Calling the function that would store the users input in the cardContent dictionary
                    storeInput();
                    createCard();

                    // Making a function that would store the users input in the cardContent dictionary
                    function storeInput() {
                        // Getting the value of the input from the user
                        const title = document.querySelector('.title');
                        const description = document.querySelector('.description');
                        const dueDate = document.querySelector('.dueDate');

                        // Checking if the user has filled all the fields
                        if(title.value === '' || description.value === '' || dueDate.value === '') {
                            alert('Please fill all the fields');
                        }
                        else {
                            // Storing the users input in the cardContent dictionary
                            cardContent.title.push(title.value);
                            cardContent.description.push(description.value);
                            cardContent.dueDate.push(dueDate.value);

                            // Cleaning the input after the user has submitted the form
                            title.value = '';
                            description.value = '';
                            dueDate.value = '';

                            // Hiding the form after the user has submitted the form
                            const formDiv = document.querySelector('.div-projectPage');
                            formDiv.style.display = 'none';
                        }
                        
                    }

                    function createCard() {
                        // Creating a card for the page
                        const card = document.createElement('div');
                        card.className = 'card-projectPage';
                        container.appendChild(card);

                        // Creating a checkbox for the card
                        const checkBox = document.createElement('input');
                        checkBox.type = 'checkbox';
                        checkBox.style.marginRight = '10px';
                        card.appendChild(checkBox);

                        // Creating the title for the card
                        const title = document.createElement('h2');
                        title.textContent = cardContent.title[cardContent.title.length - 1];
                        title.style.textAlign = 'center';
                        card.appendChild(title);

                        // Creating the description for the card
                        const description = document.createElement('p');
                        description.textContent = cardContent.description[cardContent.description.length - 1];
                        description.style.textAlign = 'center';
                        card.appendChild(description);

                        // Creating the due date for the card
                        const dueDate = document.createElement('p');
                        dueDate.textContent = cardContent.dueDate[cardContent.dueDate.length - 1];
                        dueDate.style.textAlign = 'center';
                        card.appendChild(dueDate);

                        // Creatinga delete button for the cad
                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Delete';
                        deleteButton.style.backgroundColor = 'red';
                        deleteButton.style.color = 'white';
                        deleteButton.style.border = '1px solid red';
                        deleteButton.style.borderRadius = '5px';
                        deleteButton.style.marginTop = '10px';
                        deleteButton.style.width = '5vw';
                        deleteButton.style.height = '3vh';
                        deleteButton.style.marginLeft = '45%';
                        card.appendChild(deleteButton);
                    }
                });
                divforButtons.appendChild(submitButton);
            }

            // Creating the cancel button for the form to cancel the filling of the form
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

                     // Getting the value of the input from the user
                     const title = document.querySelector('.title');
                     const description = document.querySelector('.description');
                     const dueDate = document.querySelector('.dueDate');

                     
                     // Cleaning the input after the user has submitted the form
                     title.value = '';
                     description.value = '';
                     dueDate.value = '';
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