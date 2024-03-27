//방법1 
const fs = require("fs");
const input = fs.readFileSync("run/input.txt").toString().trim();
//파일경로 or '/dev/stdin'

//방법2
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (input)=>{
    
}).on('close', ()=>{

});

