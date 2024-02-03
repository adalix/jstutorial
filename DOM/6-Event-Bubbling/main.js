const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    // console.log('clicked')
    const li = document.createElement('li');
    li.textContent = 'something new';
    ul.append(li);
});
// const items = document. querySelectorAll('li');

// items.forEach(item =>{
//     item.addEventListener('click', (e)=> {
//         e.target.remove()
//     });
// });

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove()
    }

})