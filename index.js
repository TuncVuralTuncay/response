const read = require("readline").createInterface({
input : process.stdin,
output : process.stdout
})
const chalk = require("chalk") 
read.question("Lütfen url giriniz : ", a=>{
setInterval(() =>{
const fetch = require("node-fetch") 
fetch(a) 
var dat = new Date() 
h = dat.getHours()
m = dat.getMinutes()
s = dat.getSeconds()
if(h > 10) h = "0" + h
if(m > 10) m = "0" + m
if(s > 10) s = "0" + s
console.log(`
[ ${chalk.green("OK")} ]
${chalk.blue("Request has been send successfully")} 
${h}:${m}:${s}
`) 
}, 3000)
}) 





