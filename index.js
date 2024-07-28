var randomNumber1 = Math.floor(Math.random() * 6) + 1;
let imagepath1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imagepath1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
let imagepath2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imagepath2);

if (randomNumber1 > randomNumber2){
    document.querySelector(".refresh").textContent = "🚩Player 1 wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector(".refresh").textContent = "Player 2 wins! 🚩";
}
else{
    document.querySelector(".refresh").textContent = "Draw!";
}