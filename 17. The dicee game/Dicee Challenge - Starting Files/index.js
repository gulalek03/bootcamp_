
    var randomNumber1 = Math.floor((Math.random() * 6)+1);

var imgArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png" ];

var random = imgArray[randomNumber1]; 
var randomImage = "./images/" + imgArray[randomNumber1];

document.querySelector(".img1").setAttribute("src", randomImage);



var randomNumber2 = Math.floor((Math.random() * 6)+1);

var imgArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png" ];

var random = imgArray[randomNumber2]; 
var randomImage = "./images/" + imgArray[randomNumber2];

document.querySelector(".img2").setAttribute("src", randomImage);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player1 WON!";
} 
else if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML="Equal!!!";
}
else {
    document.querySelector("h1").innerHTML="Player2 WON!";
}