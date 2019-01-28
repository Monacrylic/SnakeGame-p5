const UP = [0, -1];
const DOWN = [0, 1];
const LEFT = [-1, 0];
const RIGHT = [1, 0];
var direction;

direction = [1, 0];
let score=0;
let highscore=0;
let img;
let snakey;
let foody;
let size = 20;

//let rows, cols;


function setup() {
  createCanvas(500, 500);
  img=loadImage('start.png'); 
  snakey = new snake(300, 300, 1);
  foody= new food();
  foody.spawnfood(snakey);
  noStroke();
  frameRate(20);
  

}

function draw() {
  background(14, 71, 73);
  textAlign(LEFT);
 text("Score: "+ score, 5,20 );
  
  foody.showfood();
  
  
  if(snakey.collision()){
    snakey.die();
    gameover();
    if(score>highscore){
        highscore=score;
    }
    noLoop();
    setTimeout(displayui, 1000);
    
  }
  
  snakey.move(direction);
  
  snakey.show();
  if(onFood(foody, snakey)){
    score=score+10;
    snakey.eatfood(foody);
    foody.foodeaten();
    foody.spawnfood(snakey);
  }
  
  

}

function resetvals(){

  snakey = new snake(300, 300, 1);
  foody= new food();
  foody.spawnfood(snakey);
direction=[1,0];
    score=0;
  noStroke(); 
  
}
function keyPressed() {

  	if (keyCode === UP_ARROW && direction!=DOWN) {
      direction = UP;

    }
    else if (keyCode === DOWN_ARROW && direction!=UP ) {
      direction = DOWN;

    }
    else if (keyCode === LEFT_ARROW && direction!=RIGHT) {
      direction = LEFT;

    }
    else if (keyCode === RIGHT_ARROW && direction!=LEFT) {
      direction = RIGHT;

    }
    else if (keyCode=== ENTER || keyCode===RETURN){
        
        resetvals();
      
      loop();
    }
  

}

function onFood(foodObject, snakeObject){
  if(foodObject.x==snakeObject.x && foodObject.y==snakeObject.y ) 
  
  return true;
  
  else{
    return false;
  }
}

function equalsarr(arr1, arr2){
  for (var i=0;i<arr1.length;i++){
    if(arr1[i]!=arr2[i])
      return false;
  }
  return true;
  
}
function displayui(){
    image(img,0,0);
    
    fill(0);
    textSize(25);
     text("Best: " + highscore, width/2, height/2+30);
   
    textSize(12);
}
function gameover(){
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text("Game Over", width/2, height/2);
   
}