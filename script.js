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

// Get buttons and modals
const newCustomerBtn = document.getElementById('newCustomerBtn');
const existingCustomerBtn = document.getElementById('existingCustomerBtn');
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const questionsModal = document.getElementById('questionsModal');
const closeSignup = document.getElementById('closeSignup');
const closeLogin = document.getElementById('closeLogin');
const closeQuestions = document.getElementById('closeQuestions');

// New customer button click - open sign up modal
newCustomerBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
    signupModal.setAttribute('aria-hidden', 'false');
});

// Existing customer button click - open login modal
existingCustomerBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    loginModal.setAttribute('aria-hidden', 'false');
});

// Close modals when 'x' is clicked
closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
    signupModal.setAttribute('aria-hidden', 'true');
});

closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
    loginModal.setAttribute('aria-hidden', 'true');
});

// Close modals if clicked outside the content area
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

// Prevent form submission and handle logic if needed
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle sign up logic here...
    console.log('Sign up form submitted');
    signupModal.style.display = 'none';
    showQuestionsModal(); // Show questions modal after sign up
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle login logic here...
    console.log('Login form submitted');
    loginModal.style.display = 'none';
    showQuestionsModal(); // Show questions modal after login
});

// Function to show questions modal
// Function to show questions modal
function showQuestionsModal() {
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'questions-container'; // Add this line

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
    questionsModal.style.display = 'flex'; // Show questions modal
}


// Close questions modal when 'x' is clicked
closeQuestions.addEventListener('click', () => {
    questionsModal.style.display = 'none';
});

// Submission for questions
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