const prompt = require('prompt-sync')();

let array = prompt('Enter words for array >').split(" ");

const third = array[2];

const bool = isNaN(Number(third));

if(bool){
    const char = third.split('')
    if(char.length >=2){
        console.log(char[1])
    }
    else{
        console.log(char[0])
    }
}
else{
    console.log('error')
}
