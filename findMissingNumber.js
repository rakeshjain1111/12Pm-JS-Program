let arr = [1,2,3,4,5,7,8,9];
let lnth = arr.length;

let temp = new Array(lnth).fill(0);

for (let i = 0; i < lnth; i++) {
    //console.log(arr[i]);
    temp[arr[i]-1]=1;
}
//console.log(temp);
let missingNumber = 0;

for (let i = 0; i < lnth; i++) {
    if(temp[i] === 0 ){
        missingNumber = i+1;
        console.log(missingNumber);
    }
}


//********************SECOND LOGIC**************************************//

let num =[1,2,3,4,6,7];
//console.log(num.indexOf(8));                      
for (let i = 1; i < num.length+1; i++) {
    if(num.indexOf(i)===-1)
        {
            console.log(i);
        }
}

