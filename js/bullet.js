class Bullet{
    constructor(ctx, width, height, mousePosx, mousePosy){
        this.ctx = ctx;
        this.posX = 420;
        this.posY = 450;
        this.mousePosx = mousePosx
        this.mousePosy = mousePosy

        this.vy = 5;
    }
    draw(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.mousePosx,this.mousePosy, 100, 100);
        this.ctx.fill()

        // console.log(this.mousePosy, this.mousePosx)
    }
    move(){
        this.posY -= 1;
        console.log(this.posY)
        console.log(this.vy)
        console.log("por donde vas")
        //this.posY -= this.vy;
    
        //Accelerate > 1 &&  Decelerate < 1
        //if(this.posY >= this.floor + this.playerHeight) this.vy *= -1
      }

    
}


