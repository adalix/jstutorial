// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('you click me')
// });

 const items = document.querySelectorAll('li'); 

 items.forEach(item => {
     item.addEventListener('click', (e) =>{
        console.log(e.target )
        e.target.style.textDecoration = 'line-through';
        console.log('item deleted')
     })
 }); 