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

    function styleForDiv() {
        divForPage.style.display = 'flex';
        divForPage.style.flexDirection = 'column';
        divForPage.style.alignSelf = 'center';
        divForPage.style.justifySelf = 'center';
    }

    function HeadingForThePage() {
        const heading = document.createElement('h1');
        heading.className = 'heading-loginPage';
        heading.textContent = 'Login';
        divForPage.appendChild(heading);
    }

    function form() {
        const form = document.createElement('form');
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.alignContent = 'center';
        form.style.justifyContent = 'center';
        divForPage.appendChild(form);

        textboxes();
        submitButton();

        function textboxes() {
            const textBoxes = ['Email', 'Password'];
            textBoxes.forEach((textBox) => {
                const input = document.createElement('input');
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

        function submitButton() {
            const submitButton = document.createElement('button');
            submitButton.classList.add('submitButton');
            submitButton.textContent = 'Submit';
            form.appendChild(submitButton);
        }
    }

    return container;
}