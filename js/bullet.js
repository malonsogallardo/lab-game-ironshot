class Bullet{
    constructor(ctx){
        this.ctx = ctx;
        this.posX = 420;
        this.posY = 450;
        this.move = 0;
        this.vy = 5;
    }
    draw(){
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.posX, this.posY, 10, 10);
        this.ctx.fill()

        // console.log(this.mousePosy, this.mousePosx)
    }
    moveBullet(){
        this.posY -= this.vy;
        //this.posY -= this.vy;
    
        //Accelerate > 1 &&  Decelerate < 1
        //if(this.posY >= this.floor + this.playerHeight) this.vy *= -1
      } 
}


