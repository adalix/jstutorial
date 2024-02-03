const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    //Validation
    const username = form.username.value;
    console.log(username)
    const usernamePattern = /^[a-zA-z]{6,12}$/;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'your username is valid';
        feedback.style.color = 'green';
        feedback.style.textAlign = 'center';
    }else{
        //deedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
        feedback.style.color = 'crimson';
        feedback.style.textAlign = 'center';
    }
}); 