//this in JavaScript refers to the object that is currently using the function.

const user = {
    username : "xyz",
    price : 77,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to site`)
        console.log(this);   //current context: welcomeMessage: [Function: welcomeMessage]ie function refference 
    }
}
user.welcomeMessage();      // xyz , welcome to site
user.username = "sam";
user.welcomeMessage();      //sam , welcome to site

/*
NOTE :-
console.log(this); 
 In Node.js (global scope), "this" refers to an empty object: {}
 Why? :-Because Node runs each file inside a module.
At the top level of a Node module, "this" = module.exports = {} (an empty object initially).

console.log(this); 
In Browser (global scope), "this" refers to the global object: window
Why? Because in browsers, the global object is window, so top-level "this" = window.

*/

/////////////////// Different way to declare a function //////////////////

function one()
{

    let name = "xyz";
    console.log(this.name);     //undefined
}
one()

const anotherfunction = function two()
{

    let name = "xyz";
    console.log(this.name);     //undefined
}
anotherfunction();

const anotherfunctionss = () =>
{

    let name = "xyz";
    console.log(this.name);     //undefined
}
anotherfunctionss();

/*
NOTE:- 
A variable declared with let/const/var inside a function belongs to that function scope, not to this.
in short this keyword doesnot used with function
*/

//////////////// different way of writing arrow function//////////////////

const addone = (num1,num2)=>{
    return num1+num2;

}

// implicit return 
const addtwo = (num1,num2)=> num1+num2;

const addthree = (num1,num2)=> (num1+num2)
    
console.log(addone(5,3));
console.log(addtwo(5,3));
console.log(addthree(5,3));

/*note:- {}:- need to return something
       ():- no need to return
*/

/////// if we have to return an object then: ///////////

//const addfour = (num1,num2)=> {username: "xyz"} // undefine (this doest work)
const addfour = (num1,num2)=> ({username: "xyz"}) // need to put ()
console.log(addfour());  //{ username: 'xyz' }

/*note: Function with an object argument
When you call a function and want to pass an object, you always wrap the object in curly braces {} inside the parentheses ().*/




