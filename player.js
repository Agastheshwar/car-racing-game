class player{
    constructor(){
        this.name=null;
        this.distance=0;

    }
    display(){
        car1 = createSprite(100,348,100,100);
        car2 = createSprite(100,348,100,100);
        car3 = createSprite(100,348,100,100);
        car4 = createSprite(100,348,100,100);
        linea = createSprite(150,355,10,displayHeight-80);
        lineb = createSprite(3500,355,10,displayHeight-80);

       // drawSprites();
      // if(keyDown("space")){
        //   car2.velocityX=4;
          // car3.velocityX=5;
           //car4.velocityX=6;
           
      //  }
      // if(keyDown(UP_ARROW)){
          // car1.velocityX=8;

      // }
    }
    speed(){
        if(keyDown(UP_ARROW)){
            car1.velocityX=8;
        
        }
        if(keyDown("space")){
            car2.velocityX=4;
            car3.velocityX=5;
            car4.velocityX=6;
            
        }
        //image(road,-displayWidth*4,0,displayWidth*5,displayHeight);
        camera.position.x=car1.x;
        camera.position.y=displayHeight/2;
    }

}









