const paras = document.querySelectorAll('p')
// const para = document.querySelector('p')
console.log(paras)

paras.forEach(para => {
    if(para.innerText.includes('success')){
        para.classList.add('success')
    }else if(para.innerText.includes('error')){
        para.classList.add('error')
    }
});


const title = document.querySelector('h1');

console.log(title)

title.classList.toggle('test') // added test class
title.classList.toggle('test') //  remved test class
