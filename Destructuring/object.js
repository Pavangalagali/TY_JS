const person = {
    name:"kiran",
    age:23,
    salary:25000,
    dept:12,
    desig:"SSD"
}
const data = {
    name:"Ravan",
    age:20,
    salary:25000,
    dept:12,
    desig:"SSD"
}

var fullname =  person.name 
var personAge = person.age

console.log(fullname);
console.log(personAge);


const {dept , desig , mgrId} = person



console.log(dept);
console.log(mgrId);
console.log(salary);
console.log(designation);

function print(details){
    const {name , age} = details;
    console.log(name);
    console.log(age);
}

print(person)
print(data)
