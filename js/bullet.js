class Bullet{
    constructor(ctx, width, height, mousePosx, mousePosy){
        this.ctx = ctx;
        this.width = 
        this.height
        this.mousePosx = mousePosx
        this.mousePosy = mousePosy
    }
    draw(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.mousePosx,this.mousePosy, 5, 5);
        this.ctx.fill()
        console.log(this.mousePosy, this.mousePosx)
    }
    move(){
    }
}


