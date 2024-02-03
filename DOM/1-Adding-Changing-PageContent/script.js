const para = document.querySelector('p')

console.log(para)

para.innerText = ' this text added with JS' //! added new content to p tag

//* without removing old content;

para.innerText += ' Master at work'


// Adding list of names to the HTML page
const names = ['luigi', 'mario', 'chun-li'];

const errors = document.querySelector('div.error');

names.forEach(name => {
    errors.innerHTML += `<p>${name}</p>`
});

console.log(errors)


