const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,bin,sheet;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  bin = new dustBin(720, 390, 100, 10);
  sheet = new paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("grey");
    textSize(20);
    fill("blue");
    text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    bin.display();
    sheet.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(sheet.body, sheet.body.position, {
      x: 12,
      y: -13
    });
  }
}
