class Tower{
    constructor(ctx, width, heigth){
        this.ctx = ctx;
        this.width = 50;
        this.heigth = 50;
        this.image = new Image();
        this.image.src = "images/ironhack_logo.png";
        this.posX = 50;
        this.posY = 50;
    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
    }
    move(){
        
    }

}