const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rod;
var wire1, wire2, wire3, wire4, wire5;
var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rod = new Ground(400,175,250,20);
	bob1 = new Bob(340, 500, 30);
	bob2 = new Bob(370, 500, 30);
	bob3 = new Bob(400, 500, 30);
	bob4 = new Bob(430, 500, 30);
	bob5 = new Bob(460, 500, 30);
	wire1 = new Rope(bob1.body, rod.body, -60, 0);
	wire2 = new Rope(bob2.body, rod.body, -30, 0);
	wire3 = new Rope(bob3.body, rod.body, 0, 0);
	wire4 = new Rope(bob4.body, rod.body, 30, 0);
	wire5 = new Rope(bob5.body, rod.body, 60, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  rod.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  wire1.display();
  wire2.display();
  wire3.display();
  wire4.display();
  wire5.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-20, y:-20})
  }
}
