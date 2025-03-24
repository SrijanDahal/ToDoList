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
    
    function styleForDiv() {
        divForPage.style.display = 'flex';
        divForPage.style.flexDirection = 'column';
        divForPage.style.alignSelf = 'center';
        divForPage.style.justifySelf = 'center';
    }

    function HeadingForThePage() {
        const heading = document.createElement('h1');
        heading.className = 'heading-signUpPage';
        heading.textContent = 'Sign Up';
        divForPage.appendChild(heading);
    }

    function form() {
        const form = document.createElement('form');
        form.id = 'form';
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.alignContent = 'center';
        form.style.justifyContent = 'center';
        divForPage.appendChild(form);

        textboxes();
        submitButton();

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
                input.className = 'input';
                form.appendChild(input);
            });
        }
        
        function submitButton() {
            const submit = document.createElement('button');
            submit.classList.add('submitButton');
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
