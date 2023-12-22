const colors = ["green","red", "rgba(133,122,200)", "#f15025"];
// var btn = document.getElementById("btn");
// var color = document.querySelector(".color");

// btn.addEventListener('click', function(){
//     var randomNumber = Math.floor(Math.random()*4);
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.innerHTML= colors[randomNumber];
// })





const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
const randomNumber = getRandomNumber();

console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}