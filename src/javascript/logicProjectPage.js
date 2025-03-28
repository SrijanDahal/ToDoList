import { projectPage } from './projectPage.js';
import { tasksPage } from './tasksPage.js';
import { eventPage } from './eventPage.js';
import { form } from './functions.js';


const content = document.querySelector('.contents');
const buttonprojects = document.querySelector('.myprojects');
const defaultPage = document.querySelector('.default'); 
const buttontasks = document.querySelector('.tasks');
const buttonevents = document.querySelector('.events'); 
const formProject = document.querySelector('.projectPage');
const formTasks = document.querySelector('tasksPage');
const formEvents = document.querySelector('.eventPage');

loadpages();

if(formProject) {
    console.log('formProject exists');
}
else {
    console.log('formProject does not exist');
}

function loadpages() {
    const project = projectPage();
    const tasks = tasksPage();
    const events = eventPage();
    // Calling the functions that would create the project page
    projectPageLogic();
    tasksPageLogic();
    eventPageLogic();

    function projectPageLogic() {
        // Added the project page to the body
        
        project.style.display = 'none';
        content.appendChild(project);
        // Adding an event listener to the button that would display a form
        buttonprojects.addEventListener('click', () => {
            defaultPage.style.display = 'none'; 
            project.style.display = 'block';
            tasks.style.display = 'none';
            events.style.display = 'none';
        });
    }

    function tasksPageLogic() {
        // Added the tasks page to the body
        
        tasks.style.display = 'none';
        content.appendChild(tasks);
        // Adding an event listener to the button that would display a form
        buttontasks.addEventListener('click', () => {
            defaultPage.style.display = 'none'; 
            project.style.display = 'none';
            tasks.style.display = 'block';
            events.style.display = 'none';
        });
        
    }

    function eventPageLogic() {
        // Added the event page to the body
        
        events.style.display = 'none';
        content.appendChild(events);
        // Adding an event listener to the button that would display a form
        buttonevents.addEventListener('click', () => {
            defaultPage.style.display = 'none'; 
            project.style.display = 'none';
            tasks.style.display = 'none';
            events.style.display = 'block';
        });
    }
}