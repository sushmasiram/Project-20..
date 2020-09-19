var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall=createSprite(600,200,60,height/2);
  wall.shapeColor="green"
}

function draw() {
  background(255,255,255); 
  
  var deformation=0.5 * weight * speed * speed/22500
  if((wall.x-car.x )< (car.width+wall.width)/2)
  {

    console.log(speed);
    console.log(wall.x-car.x)
    
    console.log(car.width/2+wall.width/2);
    car.velocityX=0;
    car.collide(wall)
    //console.log(wall.x-car.x)
    if(deformation>190)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation>180 && deformation>100);
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation>100)
    {
      car.shapeColor=color(0,255,0);
    }

  }
  drawSprites();
}
