var bg;
var game;
var form;
var database;
var gameState;
var playerCount, allPlayers;
var player, playerss = [];
var pl1, p1_img, p1_run;
var pl2, p2_img, p2_run;
var poder1, poder2;
var gshot1, gshot2;
var shot1img, shot2img;

function preload(){ // função que carregar todas as imagens e animações
  bg=loadImage("assets/fundo.jpg")
  p1_img = loadAnimation("assets/b6.png","assets/b5.png","assets/b4.png","assets/b3.png","assets/b2.png","assets/b1.png");
  p1_run = loadAnimation ("assets/p11.png", "assets/p11.png","assets/p12.png", "assets/p12.png","assets/p13.png", "assets/p13.png")
  p2_img = loadAnimation("assets/p21.png","assets/p22.png","assets/p23.png");
  p2_run = loadAnimation ("assets/r21.png", "assets/r22.png","assets/r23.png")
  poder1 = loadAnimation("assets/s11.png","assets/p11.png", "assets/p11.png","assets/p12.png", "assets/p12.png","assets/p13.png", "assets/p13.png","assets/s11.png")
  poder2 = loadAnimation("assets/s21.png", "assets/s22.png","assets/s23.png")
  shot1img = loadImage("assets/s12.png")
  shot2img = loadImage("assets/s24.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(windowWidth,windowHeight);
  database=firebase.database()
  game= new Game()
  game.getState(); // pega o valor do estado do jogo!
  game.start()

}

function draw(){
  background(bg); 

  if (playerCount >= 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

