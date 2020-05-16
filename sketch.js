// var rand = Math.RandomNumber(1,400);
var rain= [];
function setup() {
  createCanvas(800,400);

  for(var i=0;i <100;i ++){
    rain [i]  = new Rain();
  }

}

function draw() {
  background("black");
    

    for(var i = 0;i <100;i++){
      rain[i].drop();
      rain[i].display();
    }
  drawSprites();
}