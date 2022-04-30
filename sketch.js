


var form,game,Player
var gameState=0
var playerCount=0

var players
var player1,player2

var allPlayers
var database

function setup() {
  createCanvas(1600,1000);
  database=firebase.database()
  game=new Game()
  game.getState()
  game.start()
}

function draw() {
  background(0); 
 if(playerCount===2){
game.update(1)
 } 
 if(gameState===1){
   clear()
   game.play()
 }
 if(gameState===2){

  game.end()
 }
 
}