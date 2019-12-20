class Background {
    constructor(ctx){
        this.ctx = ctx;
        this.width = 1400;
        this.heigth = 700;
        this.image = new Image();
        this.image.src = "images/background.jpg";
        this.posX = 250;
        this.posY = 100;
    }
    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);

    }
}