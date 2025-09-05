//array

const myArr = [0,2,3,4,5]
const myArr1 = ["qwer", "asdf"]
const myArr2 = new Array(1,2,3,4); //automaic convert in array
//console.log(myArr2.length);//4

/*Note-: [] → always predictable → makes array with the values you give.
new Array(x) → ambiguous → behaves differently if you pass 1 number vs multiple numbers.
const myArr2 = new Array(4);
console.log(myArr2.length);//4(ambiguous)
 */

////// Array Methode /////////////

myArr.push(99)
myArr.push(40)
console.log(myArr);//[ 0,  2,  3, 4, 5, 99, 40]
myArr.pop();
console.log(myArr);//[ 0, 2, 3, 4, 5, 99 ]

myArr.unshift(9)//[9, 0,  2, 3,4, 5, 99]
myArr.shift()  //[ 0, 2, 3, 4, 5, 99 ]
console.log(myArr);

 console.log(myArr.includes(9)); //false
 console.log(myArr.indexOf(3));  //2

 const newArr = myArr.join()
 console.log(myArr);  //[ 0, 2, 3, 4, 5, 99 ]
console.log( newArr); //0,2,3,4,5,99
/*The .join() method takes all elements of an array and combines them into a single string..join() does not change the original array.*/



//////////////// slice, splice /////////////////


console.log("A ", myArr);    //A  [ 0, 2, 3, 4, 5, 99 ]
const myn1 = myArr.slice(1,3)
console.log(myn1);            //[ 2, 3 ]
console.log("B ", myArr);    //B  [ 0, 2, 3, 4, 5, 99 ](do not mutate the orignal array)


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);       //C  [ 0, 5, 99 ]
console.log(myn2);              //[ 2, 3, 4 ](mutate the orignal array)