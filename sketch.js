var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,1400);

  speed=random(55,90);(22,83);
  weight=random(30,52);
  thickness=random(22,55);


bullet=createSprite(100,200,20,20);
bullet.shapeColor="black";
bullet.velocityX=speed;

wall=createSprite(800,200,thickness,height/2);
wall.shapeColor=color(80,80,80);


}

function draw() {
  background(255,255,255); 



if(wall.x-bullet.x<wall .width/2+bullet.width/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;



if(deformation<70 && deformation>90)
{
  wall.shapeColor="yellow";
}
if(deformation<50)
{
  wall.shapeColor="green";
}
if(deformation>100)
{
  wall.shapeColor="red";
}
}


drawSprites();
}


  

