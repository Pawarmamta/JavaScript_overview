/* singleton object */
//const jsUser = new Object();

const jsUser = {};
jsUser.name = "salman Khan";
jsUser.id   = 12345;
jsUser.isLogedin = "true";

//console.log(jsUser);

const regularUser ={
    name: "mamta",
    fullname: {
        userFullname:{
            firstname: "ndsnsk",
            lastname: "jvdncn"
        }
    }
}

console.log(regularUser);   //name: 'mamta', fullname: { userFullname: { firstname: 'ndsnsk', lastname: 'jvdncn' } }

///////////object combining/////////////////////

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//const newobj = {obj1,obj2,obj3};
// const newobj = Object.assign({},obj1,obj2,obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const newobj = {...obj1, ...obj2, ...obj3};//mostly use spread oprator to combine an object

console.log(newobj);

///////when data get from database////////


const users = [
    {
        id: 1,
        name: "xyz"
    },
     {
        id: 1,
        name: "ayz"
    },
     {
        id: 1,
        name: "byz"
    }

]
//console.log(users[0].name);//xyz

////// we can get keys,value of an object /////


console.log(Object.keys(jsUser));          //[ 'name', 'id', 'isLogedin' ]
console.log(Object.values(jsUser));        //[ 'salman Khan', 12345, 'true' ]
 console.log(Object.entries(jsUser));      //[ [ 'name', 'salman Khan' ], [ 'id', 12345 ], [ 'isLogedin', 'true' ] ]


 console.log(jsUser.hasOwnProperty('name'))              //true
  console.log(jsUser.hasOwnProperty('salman Khan'))     //false



////////////////// Object Destructuring ////////////////////

const Course = {
    courseName : "JavaScript",
    price: "2342",
    CourseInst: "xyz"
}

// insteed Course.CourseInst again and again

const {CourseInst:Ins} = Course                 //mostly used in react specially props

console.log (Ins);                             //xyz





////////////////////// API ////////////////////////////

