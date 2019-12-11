let game;
class Game{
    constructor(){
        this.canvasWidth = 900;
        this.canvasHeight = 600;
        
        this.ctx = document.getElementById("canvas").getContext("2d");
    
       
    }

    star(){
        // Generar elementos
        this.background = new Background(this.ctx, this.canvasHeight, this.canvasWidth)
        this.board = new Board()
        this.element = new Element()
        this.tower = new Tower()
        this.bullet = new Bullet()
        this.score = new Score()
        
        this.draw()
        // Llamar a la funcion de activar renderizado
    }

    draw(){
        this.background.draw()
        this.element.draw()
        this.tower.draw()
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