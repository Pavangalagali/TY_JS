//while
console.log("---------while------------");
var number = 1;
 while (number <= 10) {
     console.log(number);
     number++;
 }

 console.log("---------do while------------");
 //do while()
 var num = 1;
 do{
     console.log(num);
     num++
 }while (num <=10) 

var arr = [1,3,5,,67,,78,,2]
arr['name'] = "king"

 //for
 console.log("--------- for  ------------");
 for (let index = 0; index < arr.length; index++) {
     const element = arr[index];
     console.log(arr[index]);
     
 }

 //for of 
console.log("---------for of  ------------");

 for (const element of arr) {
     console.log(element);
     
 }

 console.log("====== for in ==========");
 
 for (const key in arr) {
     //key is Index
     console.log(arr[key]);
     
 }

 var person = {
     name: 'punith',
     age:20,
     salary: 40000
 }

 for (const key in person) {
     //key is the key property
    console.log(person[key]);
    
 }
