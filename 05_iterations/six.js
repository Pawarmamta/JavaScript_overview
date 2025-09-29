const coding = ["js","java","ruby","python"]

const values =  coding.forEach( (item)=>{
    console.log(item);
    
})
//console.log (values); //return undefine


// for each use call back function and does not return any thing
// filter use call back function , return some values and also include some conditions.


//filter
const Nums = [1,2,3,4,5,6,7,8,10]
const newNums = Nums.filter((num)=>{
   return  num>4}
);
console.log(newNums) //[ 5, 6, 7, 8, 10 ] if you are using scope here u need to return some value


//forEach
const no =[];
const myNum = [1,2,3,4,5,6,7,8,9,10]
myNum.forEach((num)=>{
    if(num>5)
    {
        no.push(num)
    }
})
console.log(no)//[ 6, 7, 8, 9, 10 ]

//filters excrise
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((bk)=>bk.genre==='Fiction')
      userbooks = books.filter((bk)=>{
        return bk.publish>=1985 && bk.genre==='Fiction' })
  console.log(userbooks);

  /*
  [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
]
  */