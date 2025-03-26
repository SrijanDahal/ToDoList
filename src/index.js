import './CSS/style.css';
import './images/todo-removebg-preview.png';
import './javascript/logic_landingpage.js';
import './javascript/projectPage.js';
import { projectPage } from './javascript/projectPage.js';

const body = document.querySelector('body');
const content = document.querySelector('.contents');
const button = document.querySelector('.myprojects');
const defaultPage = document.querySelector('.default'); 


button.addEventListener('click', () => {
    defaultPage.style.display = 'none'; 
    const project = projectPage();
    content.appendChild(project);
    content.display = 'block';
});


