var bg,bg2,monkey,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2=loadImage("gaelle-seguillon-gaelle-seguillon-aladdin-03.jpg")
  monkey= loadAnimation("monkey.gif")

}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  security.display();
  
  
}

function draw() {
  background(bg);
  clues();
  //security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    monkey=createSprite(500,500,10,10);
    monkey.addAnimation(monkey);
    monkey.scale=1;
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}