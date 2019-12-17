class Bullet{
    constructor(ctx, towerX, towerY, towerWidth, towerHeigth) {
        this.ctx = ctx;
        this.posX = towerX + towerWidth / 10;
        this.posY = towerY - towerHeigth / 2;
        this.heigth = 35;
        this.width = 20;
        this.move = 0;
        this.vy = 12;

        this.image = new Image();
        this.image.src = "images/bullet.png";
    }
    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
    }

    moveBullet(){
        this.posY -= this.vy;
      } 
}


