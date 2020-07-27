// proof of concept...

// var seedrandom = require('seedrandom');
// const input = require('readline-sync');

// let query = input.question('query?\n');
// let time = new Date();
// let x = time.toString()+': ' + query;
// let seed = seedrandom(x);
// let hexagram = [];
// for(let i=0;i<6;i++){
//     let line = 0;
//     for(let i=0;i<3;i++){
//         line += Math.floor(seed()*2);
//     }
//     hexagram.push(line+6);
// }
// console.log(x);
// console.log(hexagram);