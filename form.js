class form {
      constructor (){
          this.input=createInput("Name")
          this.button = createButton("Start");
          this.element = createElement("h2");
      }

      hide(){
          this.input.hide();
          this.button.hide();
          this.element.hide();
      }
      display(){
          var tittle = createElement("h1");
          tittle.html("CARS");
         tittle.position(displayWidth/2 -50,0);
         this.input.position(displayWidth/2 -40,displayHeight/2 -40);
         this.button.position(displayWidth/2 +20,displayHeight/2 );
         this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player1.name=this.input.value();
            this.element.html("3,2,1,Go")
            this.element.position(displayWidth/2 -40,displayHeight/4 );
            gameState = 1;
         })

         
      }
}
































