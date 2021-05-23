const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird;
var pig;
var log;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    bird = new Bird(200,200);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig = new Pig(810,350);
    log = new Log(810,260,300,PI/2); 

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig1 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);

    box5 = new Box(810,160,70,70);
    log3= new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    bird.display();

    box1.display();
    box2.display();
    pig.display();
    log.display();

    box3.display();
    box4.display();
    pig1.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}