const ul = document.querySelector('ul');
// ul.remove(); 

const items = document.querySelectorAll('li');
const btn = document.querySelector('button');

btn.addEventListener('click',()=> {
    const li = document.createElement('li');
    li.textContent = 'something new to do'
    // ul.append(li); // add to the bottom 
    ul.prepend(li); // add to the top
})

items.forEach(item => {
    item.addEventListener('click', (e) => {
        // e.target.style.textDecoration = 'line-through';
        e.target.remove();
    });
});
