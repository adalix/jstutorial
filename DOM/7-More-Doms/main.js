const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', ()=>{
    console.log('Hey!!! My content is copyright');
});


const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY);
    // box.textContent = `<p>offsetX: ${e.offsetX}, offsetY: ${e.offsetY}</p>`
    box.textContent = `x pos: ${e.offsetX}, y pos: ${e.offsetY}`
});


document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})
