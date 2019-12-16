class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 900;
    this.heigth = 600;
    this.fps = 60;
    this.framesCounter = 0;

    this.live = 5;
    this.countElement = 17;
    //console.log("hola", this.live)
    
    this.mousePos = {};

    this.background = new Background(this.ctx, this.width, this.heigth);
    //this.element = new Element(this.ctx, this.width, this.heigth);
    this.tower = new Tower(this.ctx, this.width, this.heigth, this.key);
    this.elements = []
    //console.log(this.elements)
    
    //this.bullet = new Bullet(this.ctx);

  };
    
  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.heigth;
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      this.framesCounter++;
      this.clear();
      this.draw();
      this.move();
      this.clearObstacle()
      this.countLives();
      if(this.framesCounter % 60 === 0) this.generateObstacle()
      //if(this.framesCounter % 70 === 0) this.live--;
      //console.log(this.live)
      // if(this.live === 0){
      //   this.gameOver()
      // }
      if(this.framesCounter > 1000) this.framesCounter = 0;

      
    
     // if(this.isCollision()) this.gameOver();
    }, 1000 / this.fps);

  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
  }

  draw() {
    this.background.draw();
    this.tower.draw();
    //this.element.draw();
    //this.bullet.draw();
    this.elements.forEach(element => element.draw())
    //this.board.boardDraw(this.board)
  }

  move() {
    this.elements.forEach(element => element.move())
    //this.bullet.moveBullet();
    this.tower.move();
  }

  gameOver(){

    clearInterval(this.interval)
  }


  isCollision(){
    return this.bullet.some(obs => (this.element.posX + this.element.width > obs.posX && obs.posX + obs.width > this.element.posX && this.element.posY + this.element.heigth > obs.posY && obs.posY + obs.heigth > this.element.posY ))
  }

  
    generateObstacle(){
      if(this.countElement > 0){
        this.elements.push(new Element(this.ctx, this.width, this.heigth, this.live))
        this.countElement--
        //console.log(this.countElement)
      } else {
        //console.log(this.elements[this.elements.length-1].posX)
       if(this.elements[this.elements.length-1].posX >= 900) {
         this.gameOver()
        }
      }
      
      

    }



/*
    clear(){
        this.ctx.clearRect(0, 0, this.width, this.heigth)
    }
*/

    clearObstacle(){
        this.elements = this.elements.filter(element => (element.posX <= 1000))
    }


  countLives() {
   // console.log("enter")
    //console.log(this.element.posX)
    if (this.elements.some( element => {
      
      //console.log(element.posX)
     return element.posX >= 1000

    })) {
      console.log(this.live)
      this.live--;
     //console.log(this.live)
    }


    if(this.live === -1){
      this.gameOver()
    }
    //console.log("enter")
  }
}
