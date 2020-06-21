const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	roof = new Roof(20);
	bobObject1 = new Bob(260, 415, 120);
	rope1 = new Rope(bobObject1.body, roof.body, -240, 0);
	bobObject2 = new Bob(380, 415, 120);
	rope2 = new Rope(bobObject2.body, roof.body, -120, 0);
	bobObject3 = new Bob(500, 415, 120);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	bobObject4 = new Bob(620, 415, 120);
	rope4 = new Rope(bobObject4.body, roof.body, 120, 0);
	bobObject5 = new Bob(740, 415, 120);
	rope5 = new Rope(bobObject5.body, roof.body, 240, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(130, 195, 29);

  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
   roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}