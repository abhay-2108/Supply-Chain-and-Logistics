const questions = [
    "How many vehicles are in your transportation fleet?",
    "What is the size of your logistics staff?",
    "Can you describe your company’s overall size (e.g., revenue, employee count)?",
    "What regions or locations do you supply?",
    "How long do you plan to use our logistics services?",
    "Do you need multi-pickup and drop-off locations? If yes, how many?",
    "What products do you transport, and what are their handling needs?",
    "What are your peak demand seasons?",
    "How do you currently manage transportation scheduling?",
    "What key performance indicators do you track for logistics?"
];


const newCustomerBtn = document.getElementById('newCustomerBtn');
const existingCustomerBtn = document.getElementById('existingCustomerBtn');
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const questionsModal = document.getElementById('questionsModal');
const closeSignup = document.getElementById('closeSignup');
const closeLogin = document.getElementById('closeLogin');
const closeQuestions = document.getElementById('closeQuestions');


newCustomerBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
    signupModal.setAttribute('aria-hidden', 'false');
});


existingCustomerBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    loginModal.setAttribute('aria-hidden', 'false');
});


closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
    signupModal.setAttribute('aria-hidden', 'true');
});

closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
    loginModal.setAttribute('aria-hidden', 'true');
});


window.addEventListener('click', (e) => {
    if (e.target == signupModal) {
        signupModal.style.display = 'none';
        signupModal.setAttribute('aria-hidden', 'true');
    }
    if (e.target == loginModal) {
        loginModal.style.display = 'none';
        loginModal.setAttribute('aria-hidden', 'true');
    }
    if (e.target == questionsModal) {
        questionsModal.style.display = 'none';
    }
});


const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('Sign up form submitted');
    signupModal.style.display = 'none';
    showQuestionsModal(); 
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('Login form submitted');
    loginModal.style.display = 'none';
    showQuestionsModal(); 
});

function showQuestionsModal() {
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'questions-container'; 

    questions.forEach((question, index) => {
        const label = document.createElement('label');
        label.setAttribute('for', `question${index}`);
        label.innerText = question;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `question${index}`;
        input.required = true;

        questionsContainer.appendChild(label);
        questionsContainer.appendChild(input);
    });

    const questionsForm = document.getElementById('questionsForm');
    questionsForm.insertBefore(questionsContainer, questionsForm.querySelector('button'));
    questionsModal.style.display = 'flex'; 
}



closeQuestions.addEventListener('click', () => {
    questionsModal.style.display = 'none';
});


const questionsForm = document.getElementById('questionsForm');
questionsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const responses = [];
    questions.forEach((_, index) => {
        const response = document.getElementById(`question${index}`).value;
        responses.push(response);
    });
    console.log('Questions submitted:', responses);
    questionsModal.style.display = 'none'; 
});
