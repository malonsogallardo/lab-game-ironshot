class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 1900;
    this.heigth = 825;
    this.fps = 60;
    this.framesCounter = 0;

    this.live = 20;
    this.punt = 0;
    this.fire = 35;
    this.died = false;
    
    this.background = new Background(this.ctx, this.width, this.heigth);
    this.tower = new Tower(this.ctx, this.width);
    this.elements = []
    this.score = new Score(this.ctx, this.score, this.live, this.fire)

    this.image1 = new Image();
    this.image1.src = "images/gameover.png";

    this.image2 = new Image();
    this.image2.src = "images/youwin.png";

    this.widthImg = 500;
    this.heigthImg = 500;
    this.posXimg = 500;
    this.posYimg = 100;

    this.difficulty = 0.8

    this.sound = new Audio();
    this.sound.src = "sound/element.mp3"

    this.sound1 = new Audio();
    this.sound1.src = "sound/live.wav"

  };
    
  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.heigth;
    document.getElementById("soundon").play()
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      this.framesCounter++;
      this.clear();
      this.draw();
      this.move(); 
      
      this.checkGame();
      this.isCollision();
      this.countLives();
      this.clearElements();  
      
      if(this.framesCounter % 60 === 0) this.generateElements();
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
    this.score.drawFire(this.fire)
    this.elements.forEach(element => element.draw())
    this.tower.draw();

  }

  move() {
    this.elements.forEach(element => element.move())
    this.tower.move();
  }

  generateElements() {
    if(this.fire > 0){
      let images = ["images/css_logo.png", "images/html_logo.png",  "images/blackhtml_logo.png",  "images/js_logo.png", "images/js_js.png","images/github1.png","images/html5_silver.png","images/github2.png"];
      this.elements.push(new Element(this.ctx, this.difficulty, images[Math.floor(Math.random()*images.length)]))
      this.fire--
    } 
}

  clearElements() {
    this.elements = this.elements.filter(element => element.posX < this.width - 280)
    this.elements = this.elements.filter(element => element.posX > this.width - 1680)
  }

  gameOver(){
      clearInterval(this.interval)
      this.ctx.drawImage(this.image1, this.posXimg, this.posYimg, this.widthImg,this.heigthImg)
      document.getElementById("soundon").pause()
      setTimeout(function(){document.getElementById("soundgameover").play()}, 300);  
  }

  win(){
    clearInterval(this.interval)
    this.ctx.drawImage(this.image2, this.posXimg, this.posYimg, this.widthImg,this.heigthImg)
    document.getElementById("soundon").pause()
    setTimeout(function(){document.getElementById("soundyouwin").play()}, 300);    
  };

  isCollision() {
    for(let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      for(let j = 0; j < this.tower.bullets.length; j++) {
        let bullet = this.tower.bullets[j]
        if(element.posX + element.widthimg > bullet.posX && bullet.posX + bullet.width > element.posX && element.posY + element.heigthimg > bullet.posY && bullet.posY + bullet.heigth > element.posY) {
          this.elements.splice(this.elements.indexOf(element), 1)
          this.tower.bullets.splice(this.tower.bullets.indexOf(bullet), 1)
          this.sound.play()
          this.sound.currentTime = 0
          this.punt++
          if(this.punt % 2 ){this.difficulty = this.difficulty + 0.1}
          }
      }
    }
  }

  countLives() {
     if ((this.elements.some( element => {return element.posX >= this.width - 280})) || (this.elements.some( element => {return element.posX <= this.width - 1680}))) {
      this.sound1.play()
      this.sound1.currentTime = 0
      this.live--;
      
      if(this.live === 0){this.died = true}
    }

  }
  
  checkGame(){
    if(this.died){
      this.gameOver()
    } else if(this.elements.length === 0 && this.fire === 0){this.win()} 
  }
}