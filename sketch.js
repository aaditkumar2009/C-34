const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var fox;
var foximg
var cage,cageimg
var rope,rope2,con,con2
var mouse,moimg
var ground;
var button1,button2,button3,button4,button5,button6

function preload(){
  forest = loadImage("forest.jpeg");
  foximg = loadImage("fox.png");
  moimg = loadImage("d2.png")
  cageimg = loadImage("d1.png");

}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
Matter.Bounds.create(579,527,100,100)
  var mouse_options = {
    restitution: 1
  }

  fox = createSprite(380,450,20,20);
  fox.addImage(foximg);
  fox.scale = 0.2

  mouse = Bodies.circle(779,310,10,mouse_options)
  World.add(world,mouse);
cage = createSprite(386,394)
cage.addImage(cageimg)
cage.scale = 0.5
rope = new Rope(6,{x:916,y:200});
rope2 = new Rope(6,{x:465,y:103});
con = new Link(rope,mouse);
con2 = new Link(rope2,mouse);
cage = createSprite(386,394)
cage.addImage(cageimg)
cage.scale = 0.5
button1 = createImg('cut_button.png');
  button1.position(885,218);
  button1.size(50,50);
  button1.mouseClicked(drop)
  button2 = createImg('cut_button.png');
    button2.position(455,148);
    button2.size(50,50);
    button2.mouseClicked(drop1)
ellipseMode(RADIUS);
}


function draw()
{
  if(keyDown(LEFT_ARROW)){
     mouse.position.x += -2
    }
    else if(keyDown(RIGHT_ARROW)){
     mouse.position.x += 2
    }
    else if(keyDown(UP_ARROW)){
     mouse.position.y += -2
    }
    else if(keyDown(DOWN_ARROW)){
 mouse.position.y += 2
    }

  background(51);
  image(forest,0,0,width,height)
  Engine.update(engine);
    push()
  imageMode(CENTER);
    if(mouse!=null){
  image(moimg,mouse.position.x,mouse.position.y,150,100)
}
pop();
//  text("X: "+mouseX, mouseX, mouseY);
//  text("Y: "+mouseY, mouseX, mouseY);
rope.show();
rope2.show();
textSize(40);
  text("x:y "+ mouseX +":"+ mouseY, mouseX, mouseY);
  drawSprites();

}

function drop()
{
  rope.break();
  con.dettach();
  con = null;
}
function drop1()
{
  rope2.break();
  con2.dettach();
  con2 = null;
}
