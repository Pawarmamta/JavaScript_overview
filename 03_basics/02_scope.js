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