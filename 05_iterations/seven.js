const  myno = [1,2,3,4,5,6,7,8,9,10];
const newno=myno.map((num)=>{
    return num+1
})
console.log(newno);


//chaning
const no =  myno
            .map((num)=> num*10)
            .map((num)=> num+1)
            .filter((num)=> num>=40)

console.log(no);

/*.map() → is used to perform some operation on every element of the array. It always returns a new array with the same length, where each element is the "transformed" version of the original.
👉 In your case:
1st .map((num)=> num*10) multiplies each element by 10.
2nd .map((num)=> num+1) adds 1 to each result.

.filter() → is used to check a condition on each element and keep only those elements where the condition is true. The result is a new array with fewer (or equal) elements.
👉 In your case:
.filter((num)=> num>=40) keeps only the numbers greater than or equal to 40.*/