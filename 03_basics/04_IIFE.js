/*Global scope pollution happens when you declare too many variables or functions in the global scope.
This can cause name collisions (same variable names overwriting each other) and unexpected bugs.

IIFE (Immediately Invoked Function Expression)

👉 To avoid polluting the global scope, we use an IIFE.
It’s a function that executes immediately after it is defined and creates its own private scope.
*/

//syntex 1:-
(function chai() // named IIFE
{
    console.log(`DB connected`);
})() ;

//systex 2:- 
( (name) => //// simple IIFE with parameters
{
    console.log(`Conected ${name}`);
})('hitesh')