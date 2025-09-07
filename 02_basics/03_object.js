/*There are 2 way to declare  object in js
 1. Litral
 2. Constructor(Singleton) 
*/

const mysymbol = Symbol("key1");

// Litral object
const jsUser = {
    name : "Salman",
    "full name" : "Salman Khan",
    age: 50,
    [mysymbol] : "keyyyy1",      //// Symbol key
    location: "Mumbai",
    email: "salman@ggg.com",
    lastLoginDay: ["Monday","Saturday"]

}
//access
//console.log(jsUser.email); //not a appropriate way
//console.log(jsUser["email"]);

//Symbol access
//console.log(jsUser[mysymbol]);

//freeze
jsUser.name = "samira khan";
//Object.freeze(jsUser);
jsUser.name = "mmmmm";
//console.log(jsUser);

/*{
  name: 'samira khan',        freeze 
  'full name': 'Salman Khan',
  age: 50,
  location: 'Mumbai',
  email: 'salman@ggg.com',
  lastLoginDay: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'keyyyy1'
}
  */

//////////function as a variable in a object///////

jsUser.greetings = function(){
    console.log("Namaskte");
}
console.log(jsUser.greetings);   //[Function (anonymous)] :- You're accessing the function but not calling it.
console.log(jsUser.greetings()); //Namaskte,undefined :-You're calling/executing the function using (),But the function doesn’t return anything (no return statement), so the outer console.log() logs undefined after "Namaskte".
