 

 const person ={
       name:"ram",
       class:'bca'
 }

// person.age= 20;
// person.contact=554554

//obj.propertiyName = value      //To add properties in object

delete person.age
//delete obj.propertiyName      //To delete properties in object
//console.log(person);

myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

 // console.log(myObj.myCars.car1);

//  for(let obj of myObj){
//     console.log(obj);
//  }

// var a = "Scaler";
// var result = a.substring(2, 4);

// console.log(result);
// function solve(arr, rotations){
//     if(rotations == 0) return arr;
//     for(let i = 0; i < rotations; i++){
//       let element = arr.pop();
//       arr.unshift(element);
//     }
//     return arr;
//    }
//  let arr=solve([44, 1, 22, 111], 5);
//  console.log(arr);

// const obj={
//   name:'ram',
//   age:28,
//   contact:885556,
//   contact:121212
// }

// console.log(obj);

//console.log(typeof String(10));
//console.log(typeof new String(10));

//For Character -->

// console.log('Hello'[2]);
// console.log('Hello'.at(-1));
// console.log('Hello'.at(-6));
// console.log('Hello'.charAt(-1));
//console.log('Hello'.charCodeAt(0));  //return ascii value
//console.log('Hello'.codePointAt(0));  //https://stackoverflow.com/questions/36527642/difference-between-codepointat-and-charcodeat

//index -- return index of char

// console.log('Hello'.indexOf('l'));
// console.log('Hello'.lastIndexOf('l'));

//include -- result true or false

//console.log('Hello'.includes('el'));
//console.log('Hello'.startsWith('He'));
//console.log('Hello'.endsWith('lo'));

//console.log('Hello'.split(''));

//console.log('He'.concat('l'));

//console.log('Hello'.repeat(3));
// console.log('Hello'.toString());
//console.log('Hello'.valueOf());  

//https://dev.to/tapuchandramojumder/understanding-valueof-and-tostring-in-javascript-7ph

//  Slice/SubString

// console.log('Hello'.slice(1,4));  
//console.log('Hello'.slice(4,1));  
// console.log('Hello'.slice(-3,-1));  

// console.log('Hello'.substring(1,4));

// when startIndex is greater than endIndex
// the value of both arguments are swapped
// console.log('Hello'.substring(4,1));

// negative start index value
//console.log('Hello'.substring(-3,4)); // -3 is treated as 0

// https://www.tutorialstonight.com/substring-in-javascript

//Trim/pad

// console.log(' Hello '.trimStart()+'abc');
// console.log(' Hello '.trimEnd()+'abc');
// console.log(' Hello '.trim()+'abc');

console.log('Hello'.padStart(10));
console.log('Hello'.padEnd(10));







