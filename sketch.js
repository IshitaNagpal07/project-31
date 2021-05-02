var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;

var score =0;
function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var i = 0; i <=80; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var s = 0; s <=160; s = s + 160) {
    divisions.push(new Divisions(s, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var h = 0; h <=240; h = h + 240) {
    divisions.push(new Divisions(h, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var t = 0; t <=320; t = t + 320) {
    divisions.push(new Divisions(t, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var a = 0; a <=400; a = a + 400) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var a = 0; a <=480; a = a + 480) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var a = 0; a <=560; a = a + 560) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var a = 0; a <=640; a = a + 640) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var a = 0; a <=720; a = a + 720) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   
  }

  for (var a = 0; a <=800; a = a + 800) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
   
  }

  //create 1st row of plinko objects
  for (var d = 75; d <=width; d=d+50) { 
    plinkos.push(new Plinko(d,75));
  }

  //create 2nd row of plinko objects
  for (var v = 50; v <=width-10; v=v+50) 
  {
    plinkos.push(new Plinko(v,175));
  }

  //create 3rd row of plinko objects
  for (var k = 25; k <=width-10; k=k+50) 
  {
    plinkos.push(new Plinko(k,275));
  }
  
  //create 4th row of plinko objects
  for (var r = 5; r <=width-10; r=r+50) 
  {
    plinkos.push(new Plinko(r,375));
  }

  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var h = 0; h < particles.length; h++) {
    particles[h].display();   
  }
  

  //display the paricles 

}