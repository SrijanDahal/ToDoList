import {form, buttonstyles} from './functions.js';

export function projectPage() {
    // Created a container for the project page
    const container  = document.createElement('div');
    container.className = 'container-projectPage';
    container.style.display = 'block';

    // Calling the functions that would create the content for the project page
    projectPageTitle();
    formProject();
    button();

    // Creating a fucntion that would add title to the page
    function projectPageTitle() {
        const title = document.createElement('h1');
        title.style.textAlign = 'center';
        title.className = 'title-projectPage';
        title.textContent = 'My Projects';
        container.appendChild(title);
    }   

    // Creating a function for the form
    function formProject() {
        const formProject = form('projectPage', 'projectPageFormId');
        formProject.style.display = 'none';
        container.appendChild(formProject);
    }

    // Creating a function that would add a button to the page
    function button() {
        // Added the the add project button to the page
        const button = buttonstyles('button-projectPage', "Add Project");
        container.appendChild(button);

        const formDiv = document.querySelector('.projectPage');

        // Adding an event listener to the button that would display a form
        button.addEventListener('click', () => {
            formDiv.style.display = 'block';
        });

        // Adding an event listener to submit and cancel buttons
        // const submitButton = document.querySelector('.submitButton-projectPage');
        const cancelButton = document.querySelector('.cancelButton-projectPage');
        // if (submitButton) {
        //     submitButton.addEventListener('click', (e) => {
        //         formDiv.style.display = 'none';
        //     });
        // }
        // else {
        //     console.error('Submit button not found');
        // }
        if (cancelButton) {
            cancelButton.addEventListener('click', (e) => {
                e.preventDefault();
                formDiv.style.display = 'none';
            });
        }
    }    

    return container;
}