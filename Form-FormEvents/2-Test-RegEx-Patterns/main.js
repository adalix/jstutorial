const form = document.querySelector('.signup-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.username.value);
    form.username.value = '';
});

const username = 'adalix';

// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if(result){
//     console.log('regex test passed :)');
// }else {
//     console.log('regex test failed :(');
// }

// console.log(result);

const pattern = /[a-z]{6,}/;

let result = username.search(pattern);

console.log(result);
