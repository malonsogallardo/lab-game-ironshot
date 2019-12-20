class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 1900;
    this.heigth = 825;
    this.fps = 60;
    this.framesCounter = 0;

    this.widthImg = 500;
    this.heigthImg = 500;
    this.posXimg = 500;
    this.posYimg = 100;

    this.live = 30;
    this.punt = 0;
    this.fire = 45;
    this.difficulty = 0.9
    this.died = false;
    
    this.elements = []
    this.background = new Background(this.ctx, this.width, this.heigth);
    this.tower = new Tower(this.ctx, this.width);
    this.score = new Score(this.ctx, this.score, this.live, this.fire)
    
    this.imaGao = new Image();
    this.imaGao.src = "images/gameover.png";

    this.imaWin = new Image();
    this.imaWin.src = "images/youwin.png";

    this.soundInit = new Audio();
    this.soundInit.src = "sound/sound.mp3"

    this.soundEl = new Audio();
    this.soundEl.src = "sound/element.mp3"

    this.soundLi = new Audio();
    this.soundLi.src = "sound/live.wav"

  };
  
  //inicio del juego
  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.heigth;
    this.soundInit.play()
    this.soundInit.currentTime = 0
    
    this.start();
  }
  //renderizado
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
  
  //generar elementos en el canvas
  generateElements() {
    if(this.fire > 0){
      let images = ["images/css_logo.png", "images/html_logo.png",  "images/blackhtml_logo.png",  "images/js_logo.png", "images/js_js.png","images/github1.png","images/html5_silver.png","images/github2.png"];
      this.elements.push(new Element(this.ctx, this.difficulty, images[Math.floor(Math.random()*images.length)]))
      this.fire--
    } 
  }

  //funcion para limpiar los elementos que salen por los anchos del canvas
  clearElements() {
    this.elements = this.elements.filter(element => element.posX < this.width - 280)
    this.elements = this.elements.filter(element => element.posX > this.width - 1680)
  }

  //colision
  isCollision() {
    for(let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      for(let j = 0; j < this.tower.bullets.length; j++) {
        let bullet = this.tower.bullets[j]
        if(element.posX + element.widthimg > bullet.posX && bullet.posX + bullet.width > element.posX && element.posY + element.heigthimg > bullet.posY && bullet.posY + bullet.heigth > element.posY) {
          this.elements.splice(this.elements.indexOf(element), 1)
          this.tower.bullets.splice(this.tower.bullets.indexOf(bullet), 1)
          this.soundEl.play()
          this.soundEl.currentTime = 0
          this.punt++
          if(this.punt % 2 ){this.difficulty = this.difficulty + 0.1}
          }
      }
    }
  }

  //contador de vidas por los dos lados
  countLives() {
    if ((this.elements.some( element => {return element.posX >= this.width - 280})) || (this.elements.some( element => {return element.posX <= this.width - 1680}))) {
      this.soundLi.play()
      this.soundLi.currentTime = 0
      this.live--;
      
      if(this.live === 0){this.died = true}
    }
  }
  
  checkGame(){
    if(this.died){
      this.gameOver();
      document.getElementById("reset-div").innerHTML = '<button id="reset">Try Again</button>'; //genera el boton
    } else if(this.elements.length === 0 && this.fire === 0){
      this.win()
      document.getElementById("reset-div").innerHTML = '<button id="reset">Try Again</button>'; //genera el boton
    }
  }

  gameOver(){
    clearInterval(this.interval)
    this.ctx.drawImage(this.imaGao, this.posXimg, this.posYimg, this.widthImg,this.heigthImg)
    this.soundInit.pause()
    setTimeout(function(){document.getElementById("soundgameover").play()}, 300);  
  } 

  win(){
    clearInterval(this.interval)
    this.ctx.drawImage(this.imaWin, this.posXimg, this.posYimg, this.widthImg,this.heigthImg)
    this.soundInit.pause()
    setTimeout(function(){document.getElementById("soundyouwin").play()}, 300);    
  };
}