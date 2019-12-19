class Element{ 
    constructor(ctx, difficulty, image){
        this.ctx = ctx;
        this.difficulty = difficulty;

        this.widthimg = 40;
        this.heigthimg = 40;
        
        this.vx = (Math.floor(Math.random() * (10 - 5)) + 5) * this.difficulty;

        this.image = new Image();
        this.image.src = image;
        
        
        this.posY = (Math.floor(Math.random() * (250 - 130)) + 130);

        this.direction = Math.round(Math.random()) * 2 - 1 
        console.log(this.direction)
        if (this.direction === 1){
            this.posX = 250;
        }else{
            this.posX = 1620;
        }
        
    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.widthimg, this.heigthimg);
    }
   
    move(){
        this.posX += this.vx * this.direction;
    }

}