const input_value = document.querySelector('.input-value');
const guess = document.querySelector('.button');
const div = document.getElementById('div');
const number = document.getElementById('num');
guess.addEventListener('click', () => {
    const num = Math.floor(Math.random() * (100-0)); // Generates random number between 0 and 99
    div.innerText =  num; // Display the random number in the div
 
    number.innerText=input_value.value;
});
 