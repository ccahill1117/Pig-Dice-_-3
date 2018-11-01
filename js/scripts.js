// Business Logic for Dice Game
function Game() {
  this.players = [],
  this.roll = 0,
  this.temp = 0,
  this.turn = ""
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}
// }
//
// Game.prototype.assignID = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

function RollDice() {
  return Math.floor(Math.random()*6)+1;
}

Game.prototype.Roll = function(Roll) {
  if (Roll > 1 && Roll <= 6) {
    this.roll = Roll;
  }
  else if (Roll = 1) {
    this.roll = 0;
    // this.turn = "it's not your turn!"
  }
  return this.roll;
}

Game.prototype.Temp = function(roll) {
  if (this.roll > 1 && this.roll <= 6) {
    this.temp += this.roll;
  }
  else if (this.roll = 1) {
    this.temp = 0;
  }
  return this.temp;
}

// var temp = function(roll) {
//   var temp = 0;
//   if (roll > 1 && roll <= 6) {
//     temp += roll;
//   }
//   else if (roll = 1) {
//     temp = 0;
//   }
//   return temp;
// }

Game.prototype.Hold = function() {{
  this.total += this.temp;
  var totalUp = this.total;
  this.roll = 0;
  this.temp = 0;
  }
  return totalUp;
}

Game.prototype.NewGame = function() {
  this.players.score = 0;
  this.temp = 0;
  this.total = 0;
  this.turn = "";
}

function Player(Name, score, id) {
  this.name = Name,
  this.score = 0,
  this.id = id
}

Player.prototype.CheckForHundred = function(){
  if(this.total >= 100){
    alert("This Player is the winner");
  }
}

var players = new Game;

// var Player1 = new Player;
// var Player2 = new Player;

function displayPlayerDetails(playersToDisplay) {
  var playersList = $("div#playersHere");
  var htmlForPlayerInfo = "";
  playersToDisplay.players.forEach(function(player) {
    htmlForPlayerInfo += "<div><p>" + "name:" + player.name + "<br>" + "total score:" + player.score + "<br>" + player.turn + "</p></div>";
  })
  playersList.html(htmlForPlayerInfo);
};

function whoseTurn() {

}

function changePlayers() {

}

var rollTemp = 0;

$(document).ready(function() {

  $("#newPlayer").submit(function(event) {
    event.preventDefault();
    var inputtedPlayerName = $("input#newName").val();
    var inputtedPlayerNumber = parseInt($("input#newNumber").val());
    $("input#newName").val("");
    $("input#newNumber").val("");

    var newPlayer = new Player(inputtedPlayerName,inputtedPlayerNumber);
    players.addPlayer(newPlayer);
    displayPlayerDetails(players);
    console.log(players);

  });


  $("#rollButton").click(function(event) {
    var rollInit = players.Roll(RollDice());
    var rollTemp = players.Temp();

    console.log(players);
    console.log(rollInit);
    console.log(rollTemp);


 });

  $("#holdButton").click(function(event) {
    players.Hold();

    console.log(players);
    console.log(turnTotal);



  });



  $("#startGame").click(function(event) {
    // players.addID();
    console.log(players);

  });

  $("#PlayerTwoHold").click(function(event) {

  });

  $("#newGame").click(function(event) {

  })


})
