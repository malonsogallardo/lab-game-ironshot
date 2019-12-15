class Bullet{
    constructor(ctx){
        this.ctx = ctx;
        this.posX = 420;
        this.posY = 450;
        this.heigth = 35;
        this.width = 20;
        this.move = 0;
        this.vy = 5;

        this.image = new Image();
        this.image.src = "images/bullet.png";
    }
    draw(){

        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
        // this.ctx.fillStyle = 'black';
        // this.ctx.fillRect(this.posX, this.posY, 5, 20);
        // this.ctx.fill()

        // console.log(this.mousePosy, this.mousePosx)
    }
    moveBullet(){
        this.posY -= this.vy;


        if(this.posY === 0){
            //console.log(this.posY)
            this.posY = 450
        }
        //this.posY -= this.vy;
    
        //Accelerate > 1 &&  Decelerate < 1
        //if(this.posY >= this.floor + this.playerHeight) this.vy *= -1
      } 
}


