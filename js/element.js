class Element{ 
    constructor(ctx, difficulty, image){
        this.ctx = ctx;
        this.difficulty = difficulty;

        this.widthimg = 40;
        this.heigthimg = 40;
        
        this.vx = (Math.floor(Math.random() * (12 - 8)) + 8) * this.difficulty; // random para añadirle dificultad

        this.image = new Image();
        this.image.src = image;
        
        
        this.posY = (Math.floor(Math.random() * (250 - 130)) + 130); //random para que salga en una posicion Y aleatoria

        this.direction = Math.round(Math.random()) * 2 - 1 //random para que se dibujen en un lado del canvas u otro
        //posicion de pintado    
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