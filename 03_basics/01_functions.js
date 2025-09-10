//function declaration
function saymyName(){
    console.log("x");
    console.log("y");
    console.log("z");
}

// saymyName;  //refrence
//saymyName();  //fun. exicution


/*
function addtwonumber(n1, n2) //  during function defination- Parameter 
{
    console.log(n1+n2);
} 
                                  //   during function call- Arguments
const result = addtwonumber(3,5); //8
console.log(result);              // undefine:- no return
*/

function addtwonumber(n1, n2) {
    let result = n1+n2;
    return result;
} 
const res = addtwonumber(3,5);
//console.log(res); //8


function loginUserMessage(username){
    if(username === undefined)
    {
        console.log("enter a user name");
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("xyzzz"));   //xyzzz just logged in
//console.log(loginUserMessage());//enter a user name undefined just logged in




/////////////////////////////////////////////////// 
   
/*

function calculateCartPrice(num1)
{
    return num1;
}
console.log(calculateCartPrice(100,200,300));     //100

*/

function calculateCartPrice(...num1) //Rest oprator
{
    return num1;
}
console.log(calculateCartPrice(100,200,300))       //[ 100, 200, 300 ]

/* note-:The ... (triple dot) can act as rest or spread operator depending on how it’s used:
   1. Rest Operator (collects values into an array/object)
   2. Spread Operator (expands values)
*/


///////////////////// object into a function ///////////////////////

const user = {
    name : "xyz",
    price : "200"
}
function handleObject(anyobject)
{
    console.log(`User name is ${anyobject.name} and the price is ${anyobject.price}`)     
}

//two ways to pass object:-

/*
1.handleObject(user)  

2. Direct passing  
handleObject({
    name:"abc",
    price:89

})
*/

/////////// passing array in function //////////////

const myNewArray = [22,33,44,55,66];
function Returnanothervalue(getarray)
{
    return getarray[2];
}

/*
1. console.log(Returnanothervalue(myNewArray));   //44
2.  console.log(myNewArray[2]);                  // direct methode
*/



