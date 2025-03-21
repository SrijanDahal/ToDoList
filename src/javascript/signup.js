const signupPage = function() {
    // Creating a container so that we can display the signup page div and also contain it
    const container = document.createElement('div');
    container.style.display = 'none'; // Hiding the container

    // Creating a div for the signup page
    const divForPage = document.createElement('div');
    divForPage.id = 'signup-page';

    // adding the div to the container
    container.appendChild(divForPage);

    // calling the function for the content and the style for the div
    styleForDiv();
    HeadingForThePage();
    
    function styleForDiv() {
        divForPage.style.display = 'flex';
        divForPage.style.flexDirection = 'column';
        divForPage.style.alignItems = 'center';
        divForPage.style.justifyContent = 'center';
    }

    function HeadingForThePage() {
        const heading = document.createElement('h1');
        heading.className = 'heading-signUpPage';
        heading.textContent = 'Sign Up';
        divForPage.appendChild(heading);
    }

    return {
        container,
    }
}();

const container = signupPage.container;
export {container};