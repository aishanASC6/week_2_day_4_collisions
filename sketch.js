
//declare some variables
let myPosX = 25;
let myPosY = 25;
let mySpeed = 3;
let enemyPosX, enemyPosY;
let enemyWidth = 50, enemyHeight = 50;
let myLeft, myRight, myTop, myBottom
let enemyLeft, enemyRight, enemyTop, enemyBottom

let points = 0;

let clefairy;
let togepi;

function setup() {
    createCanvas(500, 500);
    background(0);

    // switch rectmode
    rectMode(CENTER); // the origin will be the center
    imageMode(CENTER);

    // determine the random position of the enemy
    enemyPosX = random(25, 475);
    enemyPosY = random(100, 475);

    clefairy = loadImage("clefairy.png");
    togepi = loadImage("togepi.png");
}

function draw() {


// refrsh the background
    background(0);

    // draw the togepi enemy
    image(togepi, enemyX, enemyY, enemyWidth, enemyHeight);

    // draw yourself
    image(clefairy, posX, posY, 50, 50);
    //draw the red enemy
    fill (255, 0, 0);
    rect(enemyPosX, enemyPosY, enemyWidth, enemyHeight);

// draw myself
    fill(0, 0, 255);
    rect(myPosX, myPosY, 50, 50);

    //if the LEFT_ARROW is PRESSED
    if (keyIsDown(LEFT_ARROW)) {
        myPosX -= mySpeed;
  }
    if (keyIsDown(RIGHT_ARROW)) {
    myPosX += mySpeed;
}

    if (keyIsDown(UP_ARROW)) {
    myPosY -= mySpeed;
}

    if (keyIsDown(DOWN_ARROW)) {
    myPosY += mySpeed;

}

//restrict myself within the canvas
if (myPosX <= 25) {
    myPosX = 25;
}

if (myPosX >= 475) {
    myPosX = 475;
}

if (myPosY <= 25) {
    myPosY = 25;
}

if (myPosY >= 475) {
    myPosY = 475;
}

//know my edges
myLeft = myPosX - 25;
myRight = myPosX + 25;
myTop = myPosY - 25;
myBottom = myPosY + 25;


//define enemy edges
enemyLeft = enemyPosX - 25;
enemyRight = enemyPosX + 25;
enemyTop = enemyPosY - 25;
enemyBottom = enemyPosY + 25;

//detect collisional (or rather, detect non-collisional)
if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
    
}

else{
    // there is collision
    console.log("Collision!");
    console.log(enemyBottom,enemyTop, myBottom, myTop)
    // output text to the user
    fill(random(255), random(255), random(255));
    text("I'm colliding with my enemy" , 255, 480);

points += 5;

    enemyPosX = random(0, 500);
    enemyPosY = random(0, 500);

}

fill(255);
text("Enemies collected: " + points, 340, 25);


}


    