let p ='';
for (let i = 0; i < 6; i++) {
   
    let data ='';
    for (let j = 0; j < i; j++) {
      let rd = Math.floor(Math.random()*100)+1; 
      data+= rd.toString() + ' ';
    }
    p+= data.trim() + "\n"; 
}
console.log(p);

let p1 ='';
for (let i = 6; i >= 0; i--) {
   
    let data1 ='';
    for (let j = 1; j <= i; j++) {
      let rd1 = Math.floor(Math.random()*100)+1; 
      data1+= rd1.toString() + ' ';
    }
    p1+= data1.trim() + "\n"; 
}
console.log(p1);