let game;
class Game{
    constructor(){
        this.canvasWidth = 900;
        this.canvasHeight = 600;
        
        this.ctx = document.getElementById("canvas").getContext("2d");
    
        this.background = new Background()
        this.board = new Board()
        this.element = new Element()
        this.tower = new Tower()
        this.bullet = new Bullet()
        this.score = new Score()
        
    }

    draw(){

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