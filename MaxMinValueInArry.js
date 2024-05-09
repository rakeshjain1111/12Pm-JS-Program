let arr = [12,67,78,45,54,30];
//let arr =[10,14,2,56,24,55,6];
let lnth =arr.length;
let temp = null;


console.log("Given Array is : "+arr);

for (let i = 0; i < lnth; i++) {
   for (let j = 0; j < lnth; j++) {
     if(arr[j]>arr[j+1]){
         temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
     }
   }
}

let small = 0, large = lnth - 1; 
let tempArry = new Array(lnth);
let flag =true;

for (let i = 0; i < lnth; i++) { 
    if (flag) {
        tempArry[i] = arr[large];
        large--;
    } 
    else{
        tempArry[i] = arr[small];
        small++; 
    }
    flag = !flag; 
} 

console.log("Output Array is: "+tempArry);
