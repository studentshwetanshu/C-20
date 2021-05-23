var cat,cat2,cat3,cat4,bg,mouse,mouse2,mouse4;
var catImg,cat2Img,cat3Img,bgImg,mouseImg,mouse2Img,mouse3Img,mouse4Img;

function preload() {
    //load the images here
    catImg=loadAnimation("cat1.png");
    cat2Img=loadAnimation("cat2.png","cat3.png");
    cat4Img=loadAnimation("cat4.png");
    bgImg=loadImage("garden.png");
    mouseImg=loadAnimation("mouse1.png");
    mouse2Img=loadAnimation("mouse2.png","mouse3.png");
    mouse4Img=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);


    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("tomsleeping",catImg);
    cat.changeAnimation("tomsleeping");
    cat.scale=0.2;
  
    mouse=createSprite(100,650);
    mouse.addAnimation("mousegoing",mouseImg);
    mouse.changeAnimation("mousegoing");
    mouse.scale=0.2;
}

function draw() {

    background(bgImg);
 

 

   
    //Write condition here to evalute if tom and jerry collide
      
 if(cat.x-mouse.x<(cat.width-mouse.width)/2)
 {
       cat.velocityX=0;
       cat.addAnimation("catHappy",cat3Img);
       cat.x=300;
       cat.scale=0.2;
       cat.changeAnimation("catHappy");
       mouse.addAnimation("mouseHappy",mouse3Img);
       mouse.scale =0.15
       mouse.changeAnimation("mouseHappy");
    }
  
    drawSprites();
}


function keyPressed(){
  
  if(keyPressed === LEFT_ARROW){
    cat.velocityX=-2;
    cat.addAnimation("catComming",cat2Img);
    cat.changeAnimation("catComming");
      mouse.addAnimation("mouseTeasing",mouseImg2);
   mouse.changeAnimation("mouseTeasing");
  }

  //For moving and changing animation write code here
 
  

}
