const coding = ["js", "ruby", "java", "python"]

coding.forEach( function (val)
{
    console.log(val);
})

/* note :-
-> forEach ek higher-order function hai (ye ek function ko argument me leta hai).
-> Jo function hum pass karte hain usse callback function kehte hain.
-> Yahaan val array ka har ek element represent karta hai.
*/

coding.forEach ((items)=>{
     console.log(items);
})

coding.forEach ((items,index,arr)=>{
     console.log(items,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

