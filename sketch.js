
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var  engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 2000);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(400,600)
	bobObject2 = new Bob(300,600)
	bobObject3 = new Bob(200,600)
	bobObject4 = new Bob(500,600)
	bobObject5 = new Bob(600,600)

	//roof = new Roof(400,100,600,10)
	//roof1 = new Roof(300,100,600,10)
	//roof2 = new Roof(200,100,600,10)
	//roof3 = new Roof(500,100,600,10)
	//roof4 = new Roof(600,100,600,10)
	rope1 = new Rope(bobObject1.body , {x:300, y:200} ,400 , 0.4)
	rope2 = new Rope(bobObject2.body , {x:200, y:200} ,400,0.4)
	rope3 = new Rope(bobObject3.body , {x:100, y:200} ,400 , 0.4)
	rope4 = new Rope(bobObject4.body , {x:400, y:200} ,400 , 0.4)
	rope5 = new Rope(bobObject5.body , {x:500, y:200} , 400 , 0.4)
	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  //roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  

  
  drawSprites();
 
}

function mouseDragged(){
	
	Matter.Body.setPosition(bobObject5.body,{x:mouseX , y:mouseY})
	
	}
	function mouseReleased(){
		chain.fly();
		mouseDragged=false
		
		
		
		}