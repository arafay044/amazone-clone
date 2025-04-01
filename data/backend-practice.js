/* 
- Backend: Another computer that manages data of website
- Frontend: The part of the website that users interact with 
- Two computer connect to internet can send messages to each other using http
*/


// To send http message we use (XMLHttpRequest) this is built in class
const xhr = new XMLHttpRequest();// this is the object that will send the request
xhr.addEventListener('load',()=>{//load is response as loaded
    console.log(xhr.response);
});
xhr.open('GET','https://supersimplebackend.dev'); // (Type of http msg,Where to send http msg) --> type of msg is GET, where to send is the url of the website
xhr.send();//this is asynchornous code mean it run and dont wait to complete and move next thats why we move response in function

// URL: Uniform Resource Locator
// URL is the address of the website (https://youtube.com)
/*
Some url are not supported by the backend
e.g = https://supersimplebackend.dev/not-supported'
and it generate error with status code
-- status code starts with 4 and 5
-- 4xx: client error
-- 5xx: server error
-- 2xx: success
*/
 




