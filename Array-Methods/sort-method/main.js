const names = ['mario', 'shaun','chun-li','yoshi','luigi'];
 names.sort();
 names.reverse();
 console.log(names);

const scores = [10,50,20,5,35,70,45];
// scores.sort();
// scores.reverse();

scores.sort((a,b) => a-b);
console.log(scores);



const players = [
    {name:'mario', score:20},
    {name:'luigi', score:30},
    {name:'chun-li', score:10},
    {name:'yoshi', score:50},
    {name:'shaun', score:70},
]; 

// players.sort((a,b)=> a.score - b.score);
players.sort((a,b)=> b.score - a.score);
console.log(players);