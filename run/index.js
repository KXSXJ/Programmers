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



//몇개 받을지 물어보고 입력받기

const readline = require('readline');

const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = []; // 입력된 각 줄을 저장할 배열

rl2.question('Enter the number of lines: ', function(numLines) {
    let count = parseInt(numLines);

    // count 만큼 입력을 받음
    rl2.on('line', function(line) {
        inputLines.push(line); // 입력된 각 줄을 배열에 저장
        if (inputLines.length === count) {
            rl.close(); // 입력이 모두 완료되면 readline 인터페이스를 종료
        }
    });
});

rl2.on('close', function() {
    console.log('Input lines:', inputLines);
});