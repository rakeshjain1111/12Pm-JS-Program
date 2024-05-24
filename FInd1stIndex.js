// Qus. Given array of repeated elements ,Find out first index of repeated elements in given array : Easy
//      input : [5,4,8,5,3,4,5,8,4,7]

let arr = [5,4,8,5,3,4,5,8,4,7]
 main:for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if(arr[i]==arr[j]){
            console.log("First Index of Repeated Number :" +i);
            break main;
        }
    }
 }

 