class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 900;
    this.height = 600;
    this.fps = 60;
    
    this.mousePos = {};
    //this.framesCounter = 0;
    //canvas.addEventListener("click", evt => {
     // this.mousePos = getMousePos(canvas, evt);
       // this.bullet = new Bullet(
        // this.ctx,
        // this.width,
        // this.height,
        // this.mousePos.x,
        //this.mousePos.y
      //);
    };
    //function getMousePos(canvas, evt) {
     // return {
      //  x: evt.screenX - 510,
       // y: evt.screenY - 207
      //};
    //}

    //canvas.addEventListener("mousemove", function(evt) {
      //this.mousePos = getMousePos(canvas, evt);
      //var message = "Mouse position: " + mousePos.x + ", "+mousePos.y;
      //console.log(message);
    //});
  //}

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  }

  start() {
    this.reset();
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
    }, 1000 / this.fps);
  }

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.element = new Element(this.ctx, this.width, this.height);
    this.tower = new Tower(this.ctx, this.width, this.height);
    this.bullet = new Bullet(
        this.ctx,
        this.width,
        this.height,
        this.mousePos.x,
        this.mousePos.y
      );
    //this.board = new Board(this.ctx)
    //this.score = new Score(this.ctx)

    //console.log("entro en el renderizado")
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    this.background.draw();
    this.element.draw();
    this.tower.draw();
    //this.bullet.draw();
    //this.board.boardDraw(this.board)
  }

  move() {
    this.element.move();
    //this.bullet.move();
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
