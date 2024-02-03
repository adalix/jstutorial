const scores = [10, 30, 15, 25, 50, 40, 5];

// scores.filter((score) => {
//     return score > 20;
// });

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores);


const users = [
    {name:'shaun', premium:true},
    {name:'yoshi', premium:false},
    {name:'mario', premium:false},
    {name:'chun-li', premium:true}
];

// const premiumUsers = users.filter((user)=>{
//      return user.premium == true;
// }); //! long version

const premiumUsers = users.filter(user => user.premium); //! short version

console.log(premiumUsers);