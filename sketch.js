var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 100, 40);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = "red";
    }
    if(damage < 10){
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function hasCollided(bullet2, wall2){
  bulletRightEdge = bullet2.x + bullet2.width;
  wallLeftEdge = wall2.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
  return false;
  }
}