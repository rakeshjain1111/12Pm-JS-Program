const countChar=(str)=>{
    let obj = {};
    for (let i = 0; i < str.length; i++) {
       if(obj[str[i]]){
        obj[str[i]]+=1;
       }
       else{
        obj[str[i]]=1;
       }
    }

    for (const item in obj) {
        console.log("occurance of "+item+" is :"+obj[item]);
    }
}

countChar('india is country');