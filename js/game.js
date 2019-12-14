class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 900;
    this.height = 600;
    this.fps = 60;
    
    this.mousePos = {};

    this.background = new Background(this.ctx, this.width, this.height);
    this.element = new Element(this.ctx, this.width, this.height);
    this.tower = new Tower(this.ctx, this.width, this.height);
    this.bullet = new Bullet(this.ctx);
  };
    
  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
    }, 1000 / this.fps);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    this.background.draw();
    this.element.draw();
    this.bullet.draw();
    this.tower.draw();
    //this.board.boardDraw(this.board)
  }

  move() {
    this.element.move();
    this.bullet.moveBullet();
    this.tower.move();
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
