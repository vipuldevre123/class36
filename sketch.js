var hypnoticBall, database;
var position;

var gameState = 0;
var playerCount;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
if(gameState === 0 ){
  player = new Player();
  player.getCount();
  form = new Form();
  form.display();
}
  
}

function draw(){
  background("white");
  
}

