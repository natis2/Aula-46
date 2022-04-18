var bg
var game
var form
var database
var gameState
var playerCount
var player

function preload(){ // função que carregar todas as imagens e animações
  bg=loadImage("assets/fundo.jpg")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(windowWidth,windowHeight);
  database=firebase.database()
  game= new Game()
  game.start()
}

function draw(){
  background(bg);
  drawSprites(); 

  if (playerCount === 2) {
    game.update(1);
  }
console.log(gameState)
  if (gameState === 1) {
    game.play();
  }
}

