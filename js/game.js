class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 1900;
    this.heigth = 825;
    this.fps = 60;
    this.framesCounter = 0;

    this.live = 15;
    this.punt = 0;
    this.countElement = 25;
    this.died = false;
    
    this.background = new Background(this.ctx, this.width, this.heigth);
    this.tower = new Tower(this.ctx, this.width, this.heigth, this.key);
    this.elements = []
    this.score = new Score(this.ctx, this.score, this.live)


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

      this.clearElements();      
      this.isCollision()
      this.checkLive()
      this.countLives();

      if(this.framesCounter % 60 === 0) this.generateElements()
      
      if(this.framesCounter > 1000) this.framesCounter = 0;

    }, 1000 / this.fps);

  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
  }

  draw() {
    this.background.draw();
    this.score.draw(this.punt);
    this.score.drawLive(this.live);
    this.elements.forEach(element => element.draw())
    this.tower.draw();

  }

  move() {
    this.elements.forEach(element => element.move())
    this.tower.move();
  }

  generateElements() {
    if(this.countElement > -1){
      let images = ["images/css_logo.png","images/html_logo.png",  "images/blackhtml_logo.png",  "images/js_logo.png"];
      this.elements.push(new Element(this.ctx, this.width, this.height, images[Math.floor(Math.random()*images.length)]))
      this.countElement--

    } else {

     if(this.elements[this.elements.length-1].posX >= 1620) {}

  }
}

  clearElements() {
    this.elements = this.elements.filter(element => element.posX <= 1620)
  }

  gameOver(){
    alert("perdedoooor")
    location.reload()
    clearInterval(this.interval)
  }

  win(){
    alert("ganadol")
    location.reload()
    clearInterval(this.interval)
  }
  isCollision() {
    for(let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      for(let j = 0; j < this.tower.bullets.length; j++) {
        let bullet = this.tower.bullets[j]
        if(element.posX + element.width > bullet.posX && bullet.posX + bullet.width > element.posX && element.posY + element.heigth > bullet.posY && bullet.posY + bullet.heigth > element.posY) {
          this.elements.splice(this.elements.indexOf(element), 1)
          this.tower.bullets.splice(this.tower.bullets.indexOf(bullet), 1)
          this.punt++

        }
      }
    }
  }

  checkLive(){
    if(this.countElement === -1 && this.died === false){this.win()}
  }
  

  countLives() {
    if (this.elements.some( element => {
     return element.posX >= 1620

    })) {
      this.live--;
      console.log(this.live)
    }


    if(this.live === -1){
      this.gameOver()
    }
  }
}
