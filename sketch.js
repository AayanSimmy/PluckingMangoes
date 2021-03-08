
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var striker
var ground
var box
function preload()
{
  boyImage=loadImage("boy.png")
  treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,550,1200,20)

  mango=new Box(1000,200,30,30)
  mango2=new Box(1050,225,30,30)
  mango3=new Box(950,225,30,30)
	box2=new Box(675,625,50,50)
  box3=new Box(625,625,50,50)
  
/*	box4=new Box(575,625,50,50)
	box5=new Box(525,625,50,50)
	box6=new Box(700,575,50,50)
	box7=new Box(650,575,50,50)
	box8=new Box(600,575,50,50)
	box9=new Box(550,575,50,50)
	box10=new Box(675,525,50,50)
	box11=new Box(625,525,50,50)
	box12=new Box(575,525,50,50)
	box13=new Box(650,475,50,50)
	box14=new Box(600,475,50,50)
	box15=new Box(625,425,50,50)*/
	stone=new Bird(200,400,50)
  slingShot = new SlingShot(stone.body,{x:200,y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground.display()
  image(boyImage,167,315,200,300)
  image(treeImage,900,125,200,400)
  mango.display()
  mango2.display()
  mango3.display()
 /* box.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()*/
  stone.display()
  slingShot.display()
  
  drawSprites();
 detectcollision(stone,mango)
 detectcollision(stone,mango2)
 detectcollision(stone,mango3)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance);
  console.log(lmango.r+lstone.diameter);
  if (distance<=lmango.width+lstone.radius){
    
    Matter.Body.setStatic(lmango.body, false);
  }
  
}



