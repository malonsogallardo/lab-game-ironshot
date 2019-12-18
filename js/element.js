class Element{ 
    constructor(ctx, width, heigth, image, live){
        this.ctx = ctx;
        this.width = 40;
        this.heigth = 40;
        this.vx = 5;

        this.image = new Image();
        this.image.src = image;
        
        this.posX = 250;
        this.posY = 130;

    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
    }

    move(){
        this.posX += this.vx;
    }

}