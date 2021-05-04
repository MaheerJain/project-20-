var cat,catImg,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var bg,bgImg;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400);
    bg.addImage(bgImg);
   // bg.scale = 1.5;
  mouse= createSprite(250,400,50,50);
  mouse.addAnimation("mouse",mouseImg1);
  mouse.scale = 0.2;
  cat = createSprite(750,400,50,50);
  cat.addAnimation("cat",catImg1);
  cat.scale = 0.2;
  
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
  // cat.setCollider(circle,15,15);
  // cat.debug = true;
   //mouse.setCollider(circle,15,15);
   //cat.debug = true;
   


    if(cat.x - mouse.x < mouse.width/2 + cat.width/2 && mouse.x - cat.x < cat.width/2 + mouse.width/2  && cat.y - mouse.y < mouse.height/2 + cat.height/2  &&  mouse.y - cat.y < cat.height/2 + mouse.height/2) {
        cat.velocityX = 0;
        cat.addAnimation("cat2",catImg2);
        cat.changeAnimation("cat",catImg1);
        cat.changeAnimation("cat");
        mouse.changeAnimation("mouse2",mouseImg3);
        mouse.changeAnimation("mouse2");
        cat.scale = 0.2;

    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
console.log("Hello");
if (keyDown(LEFT_ARROW)){
    
   cat.velocityX = -5;
    cat.addAnimation("cat",catImg2);
   cat.changeAnimation("cat");
   mouse.addAnimation("catrunning",mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("catrunning");
    cat.scale = 0.2;
}

}
