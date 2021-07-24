
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;

function setup() {
	createCanvas(800, 600);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,800,30);
	hammer = new Hammer(200,200);
	stone = new Stone(100,400,PI/6);
	rubber = new Rubber(500,200);
    iron = new Iron(700,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  

}



