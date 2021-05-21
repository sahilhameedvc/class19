var fixedObject,movingObject;

var cube1,cube2;


function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400, 200, 50, 100);
  fixedObject.shapeColor="green";
  movingObject = createSprite(200,200,50,100);
  movingObject.shapeColor="green";
  cube1 = createSprite(200,50,50,50);

  cube2 = createSprite(600,50,50,50);
  cube1.velocityX=4
  cube2.velocityX=-4
}

function draw() {
  background(0); 
  fixedObject.debug=true;
  movingObject.debug=true; 
  movingObject.x=mouseX;
  movingObject.y=mouseY;
  console.log(fixedObject.x-movingObject.x);


  if(isTouching(fixedObject,movingObject)){
    fixedObject.shapeColor="red";
    movingObject.shapeColor="red";
  }
  else{
    fixedObject.shapeColor="green";
    movingObject.shapeColor="green";
  }

  bounceoff(cube1,cube2)

  drawSprites();
}




