class Element{ 
    constructor(ctx, width, heigth){
        this.ctx = ctx;
        this.width = 40;
        this.heigth = 40;
        this.vx = 1;

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
        
        
        this.posX = 0;
        this.posY = 250;



    }

    draw(){

        this.ctx.drawImage(this.img[this.randomImg], this.posX, this.posY, this.width, this.heigth);

        //this.ctx.drawImage(this.image2, 20, 20, this.width, this.heigth);
        //this.ctx.drawImage(this.image3, 100, 100, this.width, this.heigth);
        //this.ctx.drawImage(this.image4, 200, 200, this.width, this.heigth);
    }

    move(){
        this.posX += this.vx;

        if (this.posX === 900) {
            this.posX = 0;
            this.randomImg = Math.floor(Math.random() * (this.img.length));
        }

        //if(this.posX <= +this.width) this.posX = 40;


        //console.log(this.posX)
        //console.log(this.width)
    }

}