const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,r,ir,st;


function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
ir=new Iron(400,580,70,70);
  st=new Stone(300,580,50,50)
r=new Rubber(500,550,40)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
ir.display();
    st.display();
 r.display();
}