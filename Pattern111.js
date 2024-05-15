let p = '';
for (let i = 0; i < 6; i++) {
    let data = '';
  for (let j = 0; j <6; j++) {
    if(i==j) {
        data+= "*"+' ';
    }
    if((i==0||j==5)&&(j!=i)){
        data+= "$"+' ';
    }
    if(i<j&&i!=0&&j!=5) {
        data+= "1"+' ';
    }
    if(i>j&&i!=5&&j!=0) {
        data+= "2"+' ';
    }
    if((j==0||i==5)&&(i>j)) {
        data+= "0"+' ';
    }
  }  
  p+=data.trim() +'\n'
}
 console.log(p);

