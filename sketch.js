const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(100,200,30,30);
    plane = new Plane(400,200,20,20);
    rubber = new Rubber(1000,450,40,40);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    fill("brown");
    plane.display();

    fill("yellow");
    hammer.display();
    
    fill("red");
    stone.display();

    
 
}