const prompt = require('prompt-sync')();

let array = prompt('Enter words for array >').split(" ");

if(array.length < 4){
    console.log(array[array.length -1])
}
else{
    console.log(array[3]);

}
