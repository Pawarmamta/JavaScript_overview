const accountId = 14429
let accountEmail = "mamta@gg.com"
var accountPassword = "12345"
accountCity = "jaipur"//globalscope
let accountState;

// accountId=2 not allowed in const
 accountEmail = "mamta@pp.com"
 accountPassword = "765432"
accountCity = "Indor"

console.log(accountCity);
console.table({accountId, accountEmail, accountPassword, accountCity, accountState});

