class Tower{
    constructor(ctx){
        this.ctx = ctx;

        this.image = new Image();
        this.image.src = "images/ironhack_logo.png";
    }

    draw(){
        this.ctx.drawImage(this.image,0,0)
    }
    move(){
        
    }

}