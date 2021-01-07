var bullet, wall;
var speed , weight,thickness;



function setup() {
  createCanvas(1200,400);
  wall=createSprite(1000,200,60,height/2)
  bullet=createSprite(50, 200, 50, 10);
  speed= random(223,321)
  weight= random(30,52)
  thickness= random(22,83)
 bullet.velocityX= speed;
}

function draw() {
  background(0);  
  drawSprites();
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage)
    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<10)
    wall.shapeColor="green"
  }
  
}
function hasCollided (lbullet,lwall){
  rightEdge=lbullet.x + lbullet.width
  leftEdge=lwall.x
  if(rightEdge>=leftEdge){
    return true
  }
  return false;
}