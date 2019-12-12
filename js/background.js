class Background {
    constructor(ctx, width, heigth){
        this.ctx = ctx;
        this.width = width;
        this.heigth = heigth;
        this.image = new Image();
        this.image.src = "images/background.jpg";
        this.posX = 0;
        this.posY = 0;
    }
    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);

    }
}