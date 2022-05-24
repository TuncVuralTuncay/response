const read = require("readline").createInterface({
input : process.stdin,
output : process.stdout
})
read.question("Lütfen url giriniz : ").then(a=>
setTimeout(() =>{
const fetch = require("node-fetch") 
fetch(a) 
console.log("Request has been send successfully") 
}, 3000)) 





