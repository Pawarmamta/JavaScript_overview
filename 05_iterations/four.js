// loop for objets 
// 2. for in 

const myobj = {
    g1 : 'hd',
    g2 : 'hg',
    g3 : 'nk'
}

for (const key in myobj) {
    console.log(key, ':-', myobj[key]);
}
/*note:- Maps are not Iterator
const map = new Map()
map.set ('IN' , "India")
map.set ('USA' , "United state of america")
map.set ('fr' , "france")
map.set ('IN' , "India")

for(const key in map)
{
    console.log(key);
}
 */
