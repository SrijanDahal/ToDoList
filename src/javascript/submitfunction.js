export function submit() {

    // Accessing buttons in each page
    const submitButtonProjectPage = document.querySelector('.submitButton-projectPage');
    const submitButtonTextPage = document.querySelector('.submitButton-textPage');
    const submimtButtonEventsPage = document.querySelector('.submitButton-eventsPage');

    // Accessing forms in each page
    const formProjectPage = document.querySelector('#projectPageFormId');
    const formTasksPage = document.querySelector('#textsPageFormId');
    const formEventsPage = document.querySelector('#eventsPageFormId');

    // Adding event listeners to the buttons
    submitButtonProjectPage.addEventListener('click', (e) => {
        e.preventDefault();
        formProjectPage.Style.display = 'none';
    });

}