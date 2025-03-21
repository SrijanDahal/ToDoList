import './CSS/style.css';
import './images/todo-removebg-preview.png';
import {container} from './javascript/signup.js';

const signupPage = container;
document.body.appendChild(signupPage);

const landingPage = document.querySelector('.landing-page');
const mainLandingPage = document.querySelector('main');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Sign Up' || button.textContent === 'Start Now') {
            if(signupPage.style.display === 'none') {
                mainLandingPage.style.display = 'none';
                signupPage.style.display = 'flex';
            }
        } else {
            signupPage.style.display = 'none';
        }
    });
});