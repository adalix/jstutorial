const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(username.value);
//     username.value = ''
// });


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(form.username.value); // we use dot notation to get username
    form.username.value = '';
});
