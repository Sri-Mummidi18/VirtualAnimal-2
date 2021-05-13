var dog, happyDog, database, foodS, foodStock
var dogImg, dogHappyImg, foodImg;
var feed, addFood;
var foodObj;
var fedTime, lastFed:


function preload(){
  dogImg = loadImage("dogImg.png");
  dogHappyImg = loadImage("dogImg1.png");
  

}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  emo = createSprite(200,200,1,1);
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(50);

  feed=creatButton("Feed the dog");
  feed.positio(700,95);
  feed.mousePressed(feedDog);

  addFood=creatButton("Add Food");
  addFood.position(800,85);
  addFood.mousePressed(addFood);

}


function draw() {  
  background("green")

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data)[
    lastFed=data.val();
  ]);

  if(foodS == 0){
  
  dog.addImage(dogImg);
  foodS = 50;
  }

  drawSprites();
  textSize(17);
  fill("white");
  text("Long Press up arrow key to feed your pet Dog",50,50);
  fill("white");
  text("Food Remaining  "+foodS,170,440);
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').undate({
  Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  }
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}


