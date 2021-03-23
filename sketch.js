
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob, bob2, bob3, bob4, bob5;
var roof, rope, rope2, rope3, rope4, rope5;
var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(255, 600);
	bob2 = new Bob(332, 600);
	bob3 = new Bob(410, 600);
	bob4 = new Bob(488, 600);
	bob5 = new Bob(566, 600);
	roof = new Roof(400, 130, 380, 25);
	rope = new Rope(bob.body, roof.body, -80*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -40*2, 0);
	rope3= new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 40*2, 0);
	rope5= new Rope(bob5.body, roof.body, 80*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211, 211, 211);
  
	bob.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	rope.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob.body,bob.body.position,{x:-5,y:-10}); } 
}
