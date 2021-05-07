const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var ground;
var ball1;
var sling;
function setup()
{
    createCanvas(1200,800);
    myengine=Engine.create();
    myworld=myengine.world;
   
    ground=new Ground(600,790,1200,20);
     
    box1 = new Box(800,780,70,70);
    box2 = new Box(850,780,70,70);
    box3 = new Box(900,780,70,70);
    box4 = new Box(800,750,70,70);
    box5 = new Box(850,750,70,70);
    box6 = new Box(900,750,70,70);
    box7 = new Box(800,730,70,70);
    box8 = new Box(850,730,70,70);
    box9 = new Box(900,730,70,70);
    box10= new Box(800,700,70,70);
    box11= new Box(850,700,70,70);
    box12= new Box(900,700,70,70);
    box13= new Box(800,680,70,70);
    box14= new Box(850,680,70,70);
    box15= new Box(900,680,70,70);
    
    ball1= new Ball(500,600);
    sling= new SlingShot(ball1.body,{x:500,y:100})
}

function draw()
{
    Engine.update(myengine);
    background(0);
    fill("cyan");
    ball1.display();
    fill("green");
    box1.display();
    fill("blue");
    box2.display();
    fill("red");
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    sling.display();
    
    fill("brown");
    ground.display();
    noFill();
}

function mouseDragged()
{
   Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}



