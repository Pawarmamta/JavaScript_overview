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
console.log(loginUserMessage());//enter a user name undefined just logged in

