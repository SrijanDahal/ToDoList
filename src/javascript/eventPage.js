import {form, buttonstyles} from './functions.js';

export function eventPage() {
    // Created a container for the project page
    const container  = document.createElement('div');
    container.className = 'container-eventPage';
    container.style.display = 'block';

    // Calling the functions that would create the content for the project page
    projectPageTitle();
    button();
    formProject();

    // Creating a fucntion that would add title to the page
    function projectPageTitle() {
        const title = document.createElement('h1');
        title.style.textAlign = 'center';
        title.className = 'title-eventPage';
        title.textContent = 'My Events';
        container.appendChild(title);
    }   

    // Creating a function for the form
    function formProject() {
        const formProject = form('eventPage', 'eventPageFormId');
        formProject.style.display = 'none';
        container.appendChild(formProject);
    }

    // Creating a function that would add a button to the page
    function button() {
        // Added the the add project button to the page
        const button = buttonstyles('button-projectPage', "Add Events");
        container.appendChild(button);

        // Adding an event listener to the button that would display a form
        button.addEventListener('click', () => {
            const formDiv = document.querySelector('.eventPage');
            formDiv.style.display = 'block';
        });
    }    

    return container;
}