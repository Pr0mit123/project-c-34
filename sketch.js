var dog, happyDog;
var database;
var foodS;
var foodStock;
var foodObj;
var dogImage, happydogImage;
var milkImage;
function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happydogImage = loadImage("images/dogImg1.png")
  milkImage = loadImage("images/Milk.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite (250, 100, 10, 10);
  dog.addImage("dog",dogImage)
  dog.addImage("dog",happydogImage)
  foodStock=database.ref('food');
  foodstock.on("value", readstock);

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  
  feed = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  

    background(46, 139, 87)

    fill(255,255,254);
    textSize(15);
    if(lastFed>=2){
      text("Last Feed :"+LastFed%12 + " PM", 350, 30);
    }
    else if(lastFed===0){
      text("Last Feed : 12 AM",350, 30);
    } else {
      text("Last Feed : "+ lastFed + " AM", 350, 30);
    }

    display();
    
    //if (keyWentDown (UP_ARROW)){
    //  writeStock(foodS);
    // dog.addImage(dogHappy);
    //}

  drawSprites();
  
  textSize(20);
}

    function readStock(data) {
      foodS = data.val();
    }

    function writeStock(x) {

      database.ref('/').update({
        Food:x
      })
    }

    function feedDog() {
      dog.addImage(happyDog);

      foodObj.updateFoodStock(foodObj.getFoodStock()-1);
      database.ref('/').update({
        Food:foodObj.getFoodStock(),
        FeedTime:hour()
      })
    }

    function addFoods(){
      foodS++;
      database.ref('/').update({
        Food:foodS
      })
    }

    fedTime = database.ref('FeedTime');
    fedTime.on("value", function(data){
      lastFed=data.val();
    });

