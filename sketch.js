const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var form1,player1,game1;
var gameState = 0;
var car1,car2,car3,car4;
var linea,lineb;
var road;

function preload(){
  road=loadImage("road.png")
}
function setup() {
  createCanvas(displayWidth-60,displayHeight-80);
  engine = Engine.create();
    world = engine.world;
  form1 = new form();
  player1= new player();
  player1.display();
}

function draw() {
  background('blue');  
  Engine.update(engine);

  if(gameState === 0){
    form1.display();

  }
  if(gameState === 1){
    form1.hide(); 
    player1.speed();
    drawSprites();
  }
//drawSprites();
}

