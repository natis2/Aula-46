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

   // criando sprites dos players
   pl1 = createSprite(width / 2 - 200, height - 260);
   pl1.addAnimation("p1", p1_img);
   pl1.addAnimation("p1_running", p1_run);
   pl1.scale = 3;

   setTimeout(() => {
     pl1.changeAnimation("p1_running", p1_run);
   }, 5000);


   pl2 = createSprite(width / 2 + 200, height - 245);
   pl2.addAnimation("p2", p2_img);
   pl2.addAnimation("p2_run", p2_run);
   pl2.scale = 2.9;

   setTimeout(() => {
    pl2.changeAnimation("p2_run", p2_run);
  }, 5000);

   playerss = [pl1, pl2];
 }
 
ocultar(){
  form.hide()
}

play(){
  this.ocultar()
  if(playerCount===2){
    drawSprites()
    rect(width/2,height/2,100,100)
  }
}
}