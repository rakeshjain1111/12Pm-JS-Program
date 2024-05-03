let num =12345;
let numStr =num.toString();
let revStr ='';

for (let i = numStr.length-1; i >=0; i--) {
    revStr+=numStr[i];
}

console.log(revStr);