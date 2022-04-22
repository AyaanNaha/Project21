
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		density:1.2,
		restitution:0.3,
		isStatic:false,
		friction:0
	}
	ball = Bodies.circle(100,200,20,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,390,width,20);
	leftSide = new Ground(500,350,10,60);
	rightSide = new Ground(700,350,10,60);

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  Engine.update(engine);

  fill(255);
  ellipse(ball.position.x,ball.position.y,40);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-60});
	}
}

