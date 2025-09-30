const mynum = [1,2,3]

const Total = mynum.reduce(function(acc,currval){
    console.log(`acc:-${acc},currval:-${currval}`)
    return acc+currval
},0)
console.log(Total); //6
/*
acc:-0,currval:-1
acc:-1,currval:-2
acc:-3,currval:-3
*/

//arrow function 

const secTotal = mynum.reduce((acc, curr)=>acc+curr,0)
console.log(secTotal);
//const secTotal = mynum.reduce((acc, curr)=>acc+curr,0)here 0 is the initial value of acc.

//practical usecase:-

const shopingcart =[
    {
        itemname: "java course",
        price: 5000
    },
    {
        itemname: "DataScience course",
        price: 15000
    },
    {
        itemname: "java springboot course",
        price: 6000
    },
    {
        itemname: "backend course",
        price: 15000
    },
]

const priceTopay = shopingcart.reduce((acc,item)=>item.price+acc,0)
console.log(priceTopay);