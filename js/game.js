class Game{
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = 900;
        this.height = 600;
        this.fps = 60;
        this.framesCounter = 0;
    }
    
    init(){
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.start();
    }

    start(){
        this.reset()
        this.draw()
       
   }

    reset(){
        this.background = new Background(this.ctx, this.width, this.height);
        this.element = new Element(this.ctx, this.width, this.height);
        this.tower = new Tower(this.ctx, this.width, this.height);
        //this.board = new Board(this.ctx)
        //this.bullet = new Bullet(this.ctx)
        //this.score = new Score(this.ctx)

        console.log("entro en el renderizado")
    }

    draw(){
        console.log("hola")
        this.background.draw()
        console.log("adios")
        this.element.draw()
        console.log("hey")
       this.tower.draw()
        console.log("wey")
       // this.board.draw()
    }
    
    move(){

    }

   

    /*
    generateObstacle(){

    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    clearObstacle(){

    }

    updateScore(){
        
    }
    */

}