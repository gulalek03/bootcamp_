

// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];

// function nextSequence() {

//       userClickedPattern = [];

//       level++;
//       $("#level-title").text("level " + level);


//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColour = buttonColours[randomNumber]; 
//     gamePattern.push(randomChosenColour);

//     $("#" + gamePattern).fadeIn(100).fadeOut(100).fadeIn(100);
    
//     playSound(randomChosenColour);

    
    

// } 

// $(".btn").click( function(){
//     var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//     playSound(userChosenColour);
//     animatePress(userChosenColour);

//     checkAnswer(userClickedPattern.length-1);

// })

// function playSound (name) {
//     var selected = new Audio("./sounds/" + name + ".mp3");
//     selected.play(); 
// }

// function animatePress (currentColour) {
 
    
//     $("#" + currentColour).addClass("pressed");
 

//     setTimeout(function(){
//         $("#" + currentColour).removeClass("pressed");
//     }, 100);
        
        
// }

// var started = false;

// var level = 0;

// $(document).keypress(function(){
//     if (!started){
        
//       $("#level-title").text("level " + level);  
//       nextSequence();
//       started = true;
//     }
    
    
// })

// function checkAnswer(currentLevel) {
//    if ( userClickedPattern[currentLevel] === gamePattern[currentLevel] ) {
//     console.log("success");

//     if (userClickedPattern.length === gamePattern.length) {

//       setTimeout(function() {
//       nextSequence();
//       }, 1000);


//     }
//    } else{
//     var audio = new Audio ("./sounds/wrong.mp3");
//     audio.play();
//     // playSound("wrong");

//     $("body").addClass("game-over");
//     setTimeout(function(){
//         $("body").removeClass("game-over");
//     }, 200);

//     $("#level-title").text("Game Over, Press Any Key to Restart");

//     startOver();

//     console.log("wrong");
//    }

// }

// function startOver() {
//  level = 0;
//  gamePattern = [];
//  started = false;

// }
 
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;

var level = 0;


$(document).keypress(function(){
  if (!started){
      
    $("#level-title").text("level " + level);  
    nextSequence();
    started = true;
  }
  
  
});

$(".btn").click( function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
  console.log(userChosenColour);
});

function checkAnswer(currentLevel) {
  if ( userClickedPattern[currentLevel] === gamePattern[currentLevel] ) {
   console.log("success");

   if (userClickedPattern.length === gamePattern.length) {

     setTimeout(function() {
     nextSequence();
     }, 1000);


   }
  } else{
   var audio = new Audio ("./sounds/wrong.mp3");
   audio.play();
   // playSound("wrong");

   $("body").addClass("game-over");
   setTimeout(function(){
       $("body").removeClass("game-over");
   }, 200);

   $("#level-title").text("Game Over, Press Any Key to Restart");

   startOver();

   console.log("wrong");
  }

}

function nextSequence() {

      userClickedPattern = [];

      level++;
      $("#level-title").text("level " + level);


    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);

    
    

} 

function animatePress (currentColour) {
 
    
  $("#" + currentColour).addClass("pressed");


  setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
  }, 100);
      
      
}

function playSound (name) {
    var selected = new Audio("./sounds/" + name + ".mp3");
    selected.play(); 
}


function startOver() {
 level = 0;
 gamePattern = [];
 started = false;

}
 



    

    

    

    




