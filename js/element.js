class Element{ 
    constructor(ctx, width, heigth, live){
        this.ctx = ctx;
        this.width = 40;
        this.heigth = 40;
        this.vx = 5;

        this.image1 = new Image();
        this.image1.src = "images/css_logo.png";

        this.image2 = new Image();
        this.image2.src = "images/html_logo.png";

        this.image3 = new Image();
        this.image3.src = "images/blackhtml_logo.png";

        this.image4 = new Image();
        this.image4.src = "images/js_logo.png";

        this.img = [this.image1, this.image2, this.image3, this.image4]

        this.randomImg = Math.floor(Math.random() * (this.img.length));
        
        this.died = false;
        
        this.posX = 0;
        this.posY = 80;


    }

    draw(){
        if(this.died === false) this.ctx.drawImage(this.img[this.randomImg], this.posX, this.posY, this.width, this.heigth);
        

        //this.ctx.drawImage(this.image2, 20, 20, this.width, this.heigth);
        //this.ctx.drawImage(this.image3, 100, 100, this.width, this.heigth);
        //this.ctx.drawImage(this.image4, 200, 200, this.width, this.heigth);
    }

    move(){
        this.posX += this.vx;
        /*if(this.posX === 900){
            console.log(this.live)
            this.live--
            console.log("hola", this.live)
        }*/
    }
        //console.log(this.live)
       // if (this.posX === 900) {
            //console.log("hola")
           // this.live = this.live - 10;
            
            //console.log(this.live)
          //  if (this.live < 0 ){
         //       alert("game over")
                //gameOver()
         //       console.log("game over")
           // }
            //console.log(this.live)
          //  this.posX = 0;
           // this.randomImg = Math.floor(Math.random() * (this.img.length));
       // }

       //if(this.posX <= +this.width) this.posX = 40;
    

}