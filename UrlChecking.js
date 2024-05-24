
//Qus- write a program for input string is URL or not.

 
 const url = "abcd";
 const url1= "https://www.google.com"

 //1  Using Regular Expression
 
// const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
// let isUrl = urlPattern.test(url);
// console.log(isUrl);

//2 Using URL

 try {
   new URL(url);
   console.log(true);
 } catch (error) {
     console.log(false);
    console.log(error);
 }



