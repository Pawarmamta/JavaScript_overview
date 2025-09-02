const name = "Mamta";
const repocount = 23;

//console.log(name + count + "value");
// string interpolaion:-Inserting variables or expressions directly inside a string.
console.log(`Hellow my name is ${name} & my total count is ${repocount}`)

//object : key value pair
const Name = new String ("Mamta-Pawar");
console.log(Name.charAt(1));                   //a
console.log(Name.indexOf("a"));               //1
console.log(Name.substring(0,4));            //Mamt
console.log(Name.slice(-10,4));             //amt
console.log(Name.trim());                  //currently no whitespace st,end (Mamta-Pawar)
console.log(Name.replace("-", "_"));      // Mamta_Pawar
console.log(Name.split("-"));            // [ 'Mamta', 'Pawar' ]
 




 