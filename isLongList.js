const prompt = require('prompt-sync')();

let array = prompt('Enter words for array >').split(" ");

const bool = !(array.length >= 10);

if(bool){
    console.log('False')
}
else{
    console.log("True");

}