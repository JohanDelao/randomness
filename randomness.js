const alphabet = "abcdefghijklmnopqrstuvwxyz"
const foods = [
"pizza",
"burgers",
"rice and beans",
"lasagna",
"macaroni and cheese",
"baked potatoes"
];
const students = [
"Bob",
"Martin",
"Danny",
"Madhi",
"Harry",
"Sean",
"Robert"
];

function randomNumber(){
    const number = Math.random();
    console.log(number);
    const times20 = number * 21;
    console.log(times20);
    const final = Math.floor(times20);
    console.log(final)
}

randomNumber();

function randomLetter(){;
const letter = alphabet;
const random = letter.length;
for ( let i=0; i< 26; i++){
    letter += random.charAt(Math.floor(Math.random() * random));
}
return letter
}

console.log(randomLetter());

