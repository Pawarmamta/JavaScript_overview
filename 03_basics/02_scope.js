/*
When {} is used with function, if, else, for, while, etc. → it is a block (scope).
When {} is used as a value (e.g., assigned to a variable or passed into a function) → it is an object declaration (object literal).
*/

if (true) {
    let a = 100;   // block-scoped
    const b = 300; // block-scoped
    var c = 500;   // function-scoped (or global if no function)
    d = 700;       // becomes an implicit global variable
}

//console.log(a); // ❌ ReferenceError: a is not defined
//console.log(b); // ❌ ReferenceError: b is not defined
console.log(c); // ✅ 500
console.log(d); // ✅ 700


//nodescope,corescope...

/////////////////////////////////////////////////////////

function one()
{
    const name = "xyz"

    function two()
    {
        const website = "youtube"
        console.log(name);
    }

    //console.log(website);   // outsite the scope
    two();

}
one();                       // xyz

// clouser...


console.log(addone(5))   //6

function addone(num){
    return num + 1 
}



addTwo(5)       //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

/*
👉 Here addTwo is a variable (declared with const) that holds a function.
Variables declared with let or const are also hoisted,
BUT they are placed in the Temporal Dead Zone (TDZ) until the code execution actually reaches their line.
That’s why you cannot access addTwo before initialization.
*/



/////////////////////////////////////////////////////////////////////////////////////////

/*

1. Closure in JavaScript

👉 A closure is formed when a function "remembers" the variables from its outer scope, even after that outer function has finished executing.

Example:
function outer() {
  let count = 0;   // variable in outer function

  function inner() {
    count++;       // inner function can access outer function variable
    console.log(count);
  }

  return inner;
}

const counter = outer(); 
counter(); // 1
counter(); // 2
counter(); // 3


✅ Here, the inner function closes over the variable count, keeping it alive even after outer() has returned.

In short:
Closures let you access an outer function’s scope from an inner function.
They are often used for data hiding, function factories, and maintaining state.

2. Hoisting in JavaScript

👉 Hoisting is JavaScript’s behavior of moving declarations to the top of the scope before code execution.

Function Declarations are hoisted with their full definition.

Variables (var) are hoisted but initialized as undefined.

let and const are hoisted too, but they stay in the Temporal Dead Zone (TDZ) until they are initialized.

Example with var:
console.log(a); // undefined (not error)
var a = 10;

Example with let or const:
console.log(b); // ❌ ReferenceError
let b = 20;

Example with function:
sayHi(); // Works
function sayHi() {
  console.log("Hello!");
}


✅ Because the function declaration is hoisted completely.

🔑 Summary:

Closure → Inner function remembers variables of outer function even after execution.

Hoisting → Declarations are moved to the top of their scope (functions fully, variables partially).




*/