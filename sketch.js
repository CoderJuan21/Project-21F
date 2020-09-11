var bullet;
var wall,thickness;

var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(30,52);
  weight = random(223,321);
  thickness = random(22,83)

  

  wall = createSprite(1200,200, thickness , height/2);
  wall.shapeColor=("maroon");

  bullet = createSprite(100,200,50,30);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
}

function draw() {
  background("cyan");  

fill("black");
textSize(15);
text("Weight:" + weight,30,20);
text("Speed:" + speed, 30,40);

if(wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation = 0.5 * weight * speed * speed/thickness*thickness*thickness;

if(deformation > 9){
  bullet.shapeColor=("red");
}

if(deformation < 9){
bullet.shapeColor=("green");
}



  drawSprites();
}
}