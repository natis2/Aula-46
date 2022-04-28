class Game{

constructor(){
 this.poder = false;
 this.shot = false;
 this.resetButton = createButton("Reset");  // botão de reiniciar
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
   pl1 = createSprite(width / 2 - 200, height - 260,20,100);
   pl1.addAnimation("p1", p1_img);
   pl1.addAnimation("run", p1_run);
   pl1.addAnimation("poder",poder1)
   pl1.scale = 3;

   pl2 = createSprite(width / 2 + 200, height - 245,20,100);
   pl2.addAnimation("p2", p2_img);
   pl2.addAnimation("run", p2_run);
   pl2.addAnimation("poder",poder2)
   pl2.scale = 2.9;

   setTimeout(() => {
    pl2.changeAnimation("run", p2_run);
    pl1.changeAnimation("run", p1_run);
  }, 5000);

   playerss = [pl1, pl2];

   gshot1 = new Group ();
   gshot2 = new Group ();
}
 
ocultar(){
  form.hide()
  this.resetButton.class("resetButton");
  this.resetButton.position(width / 2 + 430, 10);
}

play(){
  this.ocultar();
  Player.getPlayersInfo(); 
  this.handleResetButton()
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
      this.showLife(index)

      if(index=== player.index) {
        if(this.poder){
           playerss[index-1].changeAnimation('poder')

           setTimeout(() => {
            playerss[index-1].changeAnimation('run')
            this.poder = false
           }, 2000);
        }

        // ATIRAR! 
        if(this.shot){
        var shot = createSprite(player.positionX,player.positionY,20,20) 
        if(index===1){
        gshot1.add(shot)
        shot.velocityX = 5
        shot.shapeColor = "rgb(6, 45, 200)"
       shot.addImage(shot1img)
        }else if (index===2){
        gshot2.add(shot)
        shot.velocityX = -5
        shot.shapeColor = "rgb(16, 231, 188)"
       shot.addImage(shot2img)
        }
        this.shot = false
      }
     if(pl1.collide(gshot2)){
       player.life -=15
       player.update()
     }else if (pl2.collide(gshot1)) {
       player.life -=15
       player.update()
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
  if (keyIsDown(DOWN_ARROW)){
    player.positionY -=5
    player.update()
  }
  if (keyDown("space")){
    player.positionY +=5
    player.update()
  }
  if (keyIsDown(UP_ARROW)){
    this.poder = true;
    this.shot = true;
  }
}

handleResetButton() {
  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      players: {}
    });
    window.location.reload();
  });
}

showLife(index) {
  if (index === 1){
    push();
    //image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
    fill("white");
    rect(width / 2 - 400,  100, 300, 20);
    fill("rgb(6, 45, 200)");
    rect(width / 2 - 400, 100, player.life, 20);
    noStroke();
    pop();
  }else{
    push();
    //image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
    fill("white");
    rect(width / 2+200, 100, 300, 20);
    fill("rgb(16, 231, 188)");
    rect(width / 2 +200, 100, player.life, 20);
    noStroke();
    pop();
  }
 
}


}


