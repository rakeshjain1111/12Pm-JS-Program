

let arr =['abc',1,'xyz','sbx',3,'npl']


// for(let i in arr)
// {
//     if(i%2==0){
//         console.log(arr[i]);
//     }
// }

for (let obj of arr) {
    if(isNaN(obj)){
                 console.log(obj);
     }
}