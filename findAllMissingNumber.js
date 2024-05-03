// let arr = [1,2,4,5,7]
// let lnth = 7;

// let missing = new Array();

// for (let i = 1; i <= 7; i++) {
//     if(arr.indexOf(i)== -1){
//         missing.push(i);
//     }
// }
// console.log(missing);

let arr = [6,7,10,11,13];
let lnth= arr.length;

let diff = arr[0]- 0;

for (let i = 0; i < lnth; i++) {
    console.log(arr[i]-i);
    if (arr[i]-i != diff) {
        while(diff < arr[i]-i){
            console.log(i+diff+" ");
            diff++;
        }
    }
}