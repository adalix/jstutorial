const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation
    const username = form.username.value;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'That username is valid';
        // feedback.style.color = 'green';
        // feedback.style.textAlign = 'center';
    }else {
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long !';
        // feedback.style.color = 'crimson';
        // feedback.style.textAlign = 'center';
    }
});


form.username.addEventListener('keyup', (e) => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }else {
        form.username.setAttribute('class', 'error'); 
    }
});