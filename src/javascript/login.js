export function loginPage() {
    const container = document.createElement('div');   
    container.style.display = 'none'; // Hiding the container

    // Creating a div for the login page
    const divForPage = document.createElement('div');
    divForPage.id = 'login-page';

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
        heading.className = 'heading-loginPage';
        heading.textContent = 'Login';
        divForPage.appendChild(heading);
    }

    // Creating the form for the page
    function form() {
        const form = document.createElement('form');
        form.id = 'form-login';
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.alignContent = 'center';
        form.style.justifyContent = 'center';
        divForPage.appendChild(form);

        // Calling the functions that would crete a textboxes and a submit button
        textboxes();
        submitButton();

        // Creating the textboxes for the form
        function textboxes() {
            const textBoxes = ['Email', 'Password'];
            textBoxes.forEach((textBox) => {
                const input = document.createElement('input');
                input.classList.add('inputLogin');
                if (textBox === 'Password') {
                    input.type = 'password';
                }
                else if (textBox === 'Email') {
                    input.type = 'email';
                }
                input.placeholder = textBox;
                input.style.marginBottom = '10px';
                form.appendChild(input);
            });
        }

        // Creating the submit button for the form
        function submitButton() {
            const submitButton = document.createElement('button');
            submitButton.classList.add('submitButtonLogin');
            submitButton.textContent = 'Submit';
            submitButton.addEventListener('click', () => {
                event.preventDefault();
            });
            form.appendChild(submitButton);
        }
    }

    // Returning the container
    return container;
}