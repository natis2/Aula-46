class Game{
 constructor()   {

 }
 getState() {
  var gameStateRef = database.ref("gameState");
  gameStateRef.on("value", function(data) {
    gameState = data.val();
  });
}
update(state) {
  database.ref("/").update({
    gameState: state
  });
}
 start(){
   form=new Form ()
   form.display()
   player = new Player();
    playerCount = player.getCount();

 }
 
ocultar(){
  form.hide()
}

play(){
  this.ocultar()
  console.log(playerCount)
  if(playerCount===2){
    drawSprites()
    rect(width/2,height/2,100,100)
  }
}
}