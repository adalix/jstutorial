  const article = document.querySelector('article')

//   console.log(artcile)
//   console.log(artcile.children)
// console.log(Array.from(article.children))

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element')
// })

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement); // we get article's parent element
console.log(title.nextElementSibling);
console.log(title.previousElementSibling); // Because of has no previous sibling , we get "null" in console

// chaining
console.log(title.nextElementSibling.parentElement.children); 