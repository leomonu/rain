class Rain{
    constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.yspeed = 10;
    }
    display(){
        stroke("blue");
        strokeWeight(8)
        line(this.x,this.y,this.x,this.y+10);

      }
    
      drop(){
          this.y = this.y+this.yspeed;
          if(this.y>height){
            this.y = random(0,height);
          }
      }
      


}