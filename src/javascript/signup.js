export function signUpPage() {
    // Creating a container so that we can display the signup page div and also contain it
    const container = document.createElement('div');
    container.style.display = 'none'; // Hiding the container

    // Creating a div for the signup page
    const divForPage = document.createElement('div');
    divForPage.id = 'signup-page';

 

    // calling the function for the content and the style for the div
    styleForDiv();
    HeadingForThePage();
    form();

    // adding the div to the container
    container.appendChild(divForPage);
    
    // Styling the div
    function styleForDiv() {
        divForPage.style.display = 'flex';
        divForPage.style.flexDirection = 'column';
        divForPage.style.alignSelf = 'center';
        divForPage.style.justifySelf = 'center';
    }

    // Creating the heading for the page
    function HeadingForThePage() {
        const heading = document.createElement('h2');
        heading.className = 'heading-signUpPage';
        heading.textContent = 'Sign Up';
        divForPage.appendChild(heading);
    }

    // Creating the form for the page
    function form() {
        const form = document.createElement('form');
        form.id = 'form';
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.alignContent = 'center';
        form.style.justifyContent = 'center';

        // Calling the functions that would crete a textboxes and a submit button
        textboxes();
        submitButton();

        // Adding the form to the div
        divForPage.appendChild(form);
        
        // Creating the textboxes for the form
        function textboxes() {
            const textBoxes = ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password'];
            textBoxes.forEach((textBox) => {
                const input = document.createElement('input');
                input.classList.add('inputSingUp');
                if (textBox === 'Password' || textBox === 'Confirm Password') {
                    input.type = 'password';
                }
                else if (textBox === 'Email') {
                    input.type = 'email';
                }
                else {
                    input.type = 'text';
                }
                input.placeholder = textBox;
                input.style.marginBottom = '10px';
                input.style.width = '25vw';
                input.style.height = '2vh';
                form.appendChild(input);
            });
        }
        
        // Creating the submit button for the form
        function submitButton() {
            const submit = document.createElement('button');
            submit.classList.add('submitButtonSingUp');
            submit.textContent = 'Submit';
            submit.style.backgroundColor = 'blue';
            submit.style.color = 'white';
            submit.style.border = 'none';
            submit.style.padding = '10px';
            submit.style.width = '10vw';
            submit.style.marginTop = '10px';
            submit.addEventListener('click', () => {
                event.preventDefault();
            });

            form.appendChild(submit);
        }
    }

    return container;
};
