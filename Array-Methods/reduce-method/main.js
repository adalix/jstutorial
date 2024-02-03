// const scores = [10, 20, 60, 40, 70, 90, 30];

//! Getting number greater than 50

// const result = scores.reduce((acc, cur) => {
//     if(cur > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);


//! addition of mario's scores
const scores = [
    {player: 'mario', score:50},
    {player: 'yoshi', score:30},
    {player: 'mario', score:70},
    {player: 'crystal', score:60},
];

 const marioTotal = scores.reduce((acc, cur) => {
    if(cur.player === 'mario'){
        acc += cur.score;
    }
    return acc;
 }, 0);

 console.log(marioTotal);