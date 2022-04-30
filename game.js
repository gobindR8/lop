class Game{
constructor(){

}

getState(){
var stalu=database.ref('gameState')
stalu.on("value",function (data){
gameState=data.val()

})
}

update(state){
database.ref('/').update({
gameState:state

})
}

async start(){

if(gameState===0){
Player=new player()
var playerref=await database.ref('playerCount').once("value")
if(playerref.exists()){
    playerCount=playerref.val()
    Player.getCount()
}
form=new Form()
form.display()

}

player1=createSprite(200,100)

 player2=createSprite(100,100)


players=[player1,player2]
}
play(){

form.hide()
player.getplayerinfo()
var x=100
var y=200
var index=0
drawSprites()
for(var plr in allPlayers){

    index=index+1
x=500-allPlayers[plr].distance
y=200
players[index-1].x=x
players[index-1].y=y

if(index===Player.index){

    text(allPlayers[plr].name,x-25,y+25)
}

}
if(KeyisDown(RIGHT_ARROW)&& Player.index !== null){

    Player.distance -=10
    Player.update()
}
if(KeyisDown(LEFT_ARROW)&& Player.index !== null){

    Player.distance +=10
    Player.update()
}


}


}


