class Food {

    constructor(){
        var foodStock, lastFed;
        
    }

    GetFoodStock(){}
    
    updateFoodStock(){}
    
    deductFood(){}

    display(){
        foodImg = loadImg("Milk.png");

        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last feed: "+lastFed%12 + "pm",350,30);
          } else (lastFed==0){
            text("Last Feed : 12 AM",350,30);
          } else {
            text("Last Feed :"+ lastFed + "AM",350,30);
          }
    
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
        
    }
}