let arr = [1,2,3,4,5,6];
let arr2 =[1,2,null,4,undefined,6];
let res = true;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]!=arr2[i]){
        res = false;
        break;
    }
}

console.log(res);

// if(res){
//     console.log("Both Array are same");
// }
// else{
//     console.log("Both array are not same");
// }