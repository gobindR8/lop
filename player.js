class player{

constructor(){
this.name=null
this.score=0
this.distance=0
this.index=0
}

getCount(){
var playt=database.ref('playerCount')
playt.on("value",(data)=>{
playerCount=data.val()

})

}

updateCount(count){
database.ref('/').update({

    playerCount:count
})

}
update(){
var playerindex= "players/player"+this.index
database.ref(playerindex).set({
name:this.name,
score:this.score,
distance:this.distance
})
}



static getplayerinfo(){
var ben=database.ref('players')
ben.on("value",(data)=>{
allPlayers=data.val()
})


}

}