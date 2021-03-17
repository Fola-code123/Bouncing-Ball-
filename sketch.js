const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine, world;
var ball;

var ground;

function setup(){
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    
    
    var ground_options = {
        isStatic : true
    }
    ground = Bodies.rectangle(200,390,300,20, ground_options);
    World.add(world,ground);

    var ball_options = {
        restitution: 2
    }

ball = Bodies.circle(200,200,30, ball_options)
  World.add(world,ball);
 

}

function draw(){
  background("green");

  Engine.update(engine);

  
  ellipseMode(RADIUS);

  ellipse(ball.position.x, ball.position.y, 30,30); 


    rectMode(CENTER);
    
    rect(ground.position.x, ground.position.y,300,20);
}