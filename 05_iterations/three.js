const arr = [1,2,3,4,5]

// 1. for of loop
for(const num of arr)
{
    console.log(num);

}

const greeting = "hellow worls"
for(const greet of greeting)
{
    if(greet == " ")
    {
        continue;
    }
    console.log(`each char is  ${greet}`);
}
/*
each char is  h
each char is  e
each char is  l
each char is  l
each char is  o
each char is  w
each char is  w
each char is  o
each char is  r
each char is  l
each char is  s
*/

//Maps :- an object consist unique value(no duplicate key)
 
const map = new Map()
map.set ('IN' , "India")
map.set ('USA' , "United state of america")
map.set ('fr' , "france")
map.set ('IN' , "India")

console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United state of america',
  'fr' => 'france'
}
*/

for(const key of map)
{
    console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United state of america' ]
[ 'fr', 'france' ]
*/

//After destructure

for(const [key, value] of map)
{
    console.log(key, ':-' , value);
}
/*
IN :- India
USA :- United state of america
fr :- france
*/

/*note:- for of loop does not iterate object
const myobj = {
    g1 : 'hd',
    g2 : 'hg'
}
for(const [key,value] of myobj)
{
    console.log(key, ':-' , value)
}
*/