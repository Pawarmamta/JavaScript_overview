// Stack memory(primitive type)

 let name = "mamta";
 let orignal_name = name;
  orignal_name = "mamta pawar"
 
 console.log(orignal_name)
  console.log(name)

  ////// note-: (changes affect only copy, not original) /////////

// Heap memory(Refference type)

let student1 = {
    name : "mamta",
    roll : 23
}

let student2 = student1;
student2.roll = 2324

console.log(student1.roll)

/////// note:- (changes affect original also)  //////