class Game{
constructor(){
 this.poder = false
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
   pl1.addAnimation("poder",poder)
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
  this.ocultar();
  Player.getPlayersInfo(); 
  console.log(playerCount)
  if(playerCount===2){
    drawSprites()
this.keyBoard()
    var index = 0
    for (var plr in allPlayers) { 
      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;
  
      playerss[index].position.x = x;
      playerss[index].position.y = y;
      index ++;
      if(index=== player.index) {
        if(this.poder){
      playerss[index].changeAnimation('poder', poder)
        }
      }
     }

  }
}
keyBoard(){
  if(keyIsDown(LEFT_ARROW)){
    player.positionX -=5
    player.update()
  }
if (keyIsDown(RIGHT_ARROW)){
  player.positionX +=5
  player.update()
}
if (keyIsDown(UP_ARROW)){
  this.poder = true;
}
}
}