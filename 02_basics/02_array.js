const marvel_hero = ['thor','Ironman','spiderman']
const dc_hero = ['superman','flash','batman']
marvel_hero.push(dc_hero);
console.log(marvel_hero);//   [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_hero[3]);    //[ 'superman', 'flash', 'batman' ]
console.log(marvel_hero[3][1]); //flash
