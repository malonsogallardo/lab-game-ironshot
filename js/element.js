class Element{ 
    constructor(ctx, width, heigth){
        this.ctx = ctx;
        this.width = 40;
        this.heigth = 40;

        this.image1 = new Image();
        this.image1.src = "images/css_logo.png";

        this.image2 = new Image();
        this.image2.src = "images/html_logo.png";

        this.image3 = new Image();
        this.image3.src = "images/blackhtml_logo.png";

        this.image4 = new Image();
        this.image4.src = "images/js_logo.png";

        this.posX = 0;
        this.posY = 0;

    }

    draw(){
        this.ctx.drawImage(this.image1, this.posX, this.posY, this.width, this.heigth);
        this.ctx.drawImage(this.image2, 20, 20, this.width, this.heigth);
        this.ctx.drawImage(this.image3, 100, 100, this.width, this.heigth);
        this.ctx.drawImage(this.image4, 200, 200, this.width, this.heigth);
    }

}