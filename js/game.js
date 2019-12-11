let game;
class Game{
    constructor(){
        this.canvasWidth = 900;
        this.canvasHeight = 600;
        
        this.ctx = document.getElementById("canvas").getContext("2d");
    
       
    }

    start(){
        
        this.background = new Background(this.ctx, this.canvasHeight, this.canvasWidth)
        this.board = new Board(this.ctx)
        this.element = new Element(this.ctx)
        this.tower = new Tower(this.ctx)
        this.bullet = new Bullet(this.ctx)
        this.score = new Score(this.ctx)
        this.draw()
        
        // Llamar a la funcion de activar renderizado
    }

    draw(){
        console.log("hola")
        this.background.draw()
        //this.element.draw()
        //this.tower.draw()
    }
    move(){

    }
    renderizado(){

    }

    generateObstacle(){

    }

    clear(){

    }

    clearObstacle(){

    }

    updateScore(){
        
    }

}



// logica del juego