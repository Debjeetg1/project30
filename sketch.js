const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine , world

var ball;

var rope;

var ground1  ,ground2 , ground3;

var block1 , block2 , block3 , block4 , block5 , block6 , block7, block8  , block9 , block10,
  block11 , block12 , block13 , block14 , block15 , block16 , block17 , block18 , block19,
  block20 , block21 , block22 , block23 , block24 , block25 , block26 , block27 , block28,
  block29 , block30;


function setup() {
  createCanvas(1200,700);
 
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(200 , 350 , 40);

  rope = new Rope(ball.body , {x: 150 , y: 350});

  ground1 = new Ground(600 , 400 , 300 , 10);
  ground2 = new Ground(1000,  200 ,300 , 10);
  ground3 = new Ground(600 , 690 , 2400 , 50);

  block1 = new Block(500 , 380);
  block2 = new Block(550 , 380);
  block3 = new Block(600 , 380);
  block4 = new Block(650, 380);
  block5 = new Block(700 , 380);
  block6 = new Block(525 , 360);
  block7 = new Block(575 , 360);
  block8 = new Block(625 , 360);
  block9 = new Block(675 , 360);
  block10 = new Block(550 , 340);
  block11 = new Block(600 , 340);
  block12 = new Block(650 , 340);
  block13 = new Block(575 , 320);
  block14 = new Block(625 , 320);
  block15 = new Block(600 , 300);

  block16 = new Block(900 , 180);
  block17 = new Block(950 , 180);
  block18 = new Block(1000 , 180);
  block19 = new Block(1050 , 180);
  block20 = new Block(1100 , 180);
  block21 = new Block(925  , 160);
  block22 = new Block(975 , 160);
  block23 = new Block(1025 , 160);
  block24 = new Block(1075 , 160);
  block25 = new Block(950 , 140);
  block26 = new Block(1000 , 140);
  block27 = new Block(1050 ,140);
  block28 = new Block(975 , 120);
  block29 = new Block(1025 , 120);
  block30  = new Block(1000 , 100); 
}

function draw() {
  background(10);  

  Engine.update(engine);

  ball.display();

  rope.display();

  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  
}

function mouseDragged()
{
   Matter.Body.setPosition(ball.body , {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  rope.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    rope.attach(ball);
  }
} 