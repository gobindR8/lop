class Form{
constructor(){
this.input=createInput("name")
this.button=createButton('play')
this.greeting=createElement('h2')


}
hide(){

    this.input.hide()
        this.button.hide()
    
}

display(){
this.input.position(400,200)
this.button.position(200,400)



this.button.mousePressed(()=>{
this.button.hide()
this.input.hide()
  Player.name=this.input.value()
 
playerCount+=1
Player.index=playerCount
Player.update()
Player.updateCount(playerCount)
this.greeting.html("hello  "+  Player.name)
this.greeting.position(200,400)
this.greeting.style('color','white')
})
}



}