const marvel_hero = ['thor','Ironman','spiderman']
const dc_hero = ['superman','flash','batman']


//marvel_hero.push(dc_hero);
//console.log(marvel_hero);//   [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_hero[3]);    //[ 'superman', 'flash', 'batman' ]
//console.log(marvel_hero[3][1]); //flash


// concat

const new_hero = marvel_hero.concat(dc_hero);
//console.log(new_hero);    //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread oprator:-   The spread operator (...) is used to combine or expand arrays and objects in a cleaner and shorter way than traditional methods like concat().

const all_heros = [...marvel_hero, ...dc_hero]
//console.log(all_heros);  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//flat

const no = [1,2,3,[43,5], 11,12,13,[4,5,[9,6,7]]]
const real_Array = no.flat(Infinity);
//console.log(real_Array);  
/* 
   1,  2, 3, 43, 5, 11,
  12, 13, 4,  5, 9,  6,
   7

*/


//check array if not then convert

console.log(Array.isArray("salman khan"));  //false

console.log(Array.from("salman khan"));       //[  's', 'a', 'l', 'm','a', 'n', ' ', 'k','h', 'a', 'n']
console.log(Array.from({name:"salman khan"})); //[] 

let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3));         //[ 100, 200, 300 ]
