class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 1900;
    this.heigth = 825;
    this.fps = 60;
    this.framesCounter = 0;

    this.live = 10;
    this.punt = 0;
    this.countElement = 25;
    this.died = false;
    
    this.background = new Background(this.ctx, this.width, this.heigth);
    this.tower = new Tower(this.ctx, this.width, this.heigth, this.key);
    this.elements = []
    this.score = new Score(this.ctx, this.score, this.live)

    this.image1 = new Image();
    this.image1.src = "images/gameover.png";

    this.image2 = new Image();
    this.image2.src = "images/youwin.png";

    this.soundwin = new Audio("sound/youwin.mp3");
    this.bulletshoot = new Audio("sound/bullet.mp3");
    this.soundgameover = new Audio("sound/gameover.mp3");

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

      
      this.isCollision();
      this.clearElements();  
      this.countLives();  
      //this.checkLive(); 
      //console.log(this.framesCounter)
      if(this.framesCounter % 60 === 0) this.generateElements();
      if(this.framesCounter > 1000) this.framesCounter = 0;
      //console.log(this.elements.length)
   


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
    if(this.countElement > 0){
      let images = ["images/css_logo.png","images/html_logo.png",  "images/blackhtml_logo.png",  "images/js_logo.png"];
      this.elements.push(new Element(this.ctx, this.width, this.height, images[Math.floor(Math.random()*images.length)]))
      this.countElement--

    } 
}

  clearElements() {
    this.elements = this.elements.filter(element => element.posX <= 1620)
  }

  gameOver(){
    //this.stop()
    console.log("pierdes")
    
    setTimeout(function(){
      clearInterval(this.interval)
      this.ctx.drawImage(this.image1, 500, 100, 500,500)
      document.getElementById("soundgameover").play()
    }.bind(this),500);
    

  }

  win(){
    console.log("ganas")
    setTimeout(function(){
      clearInterval(this.interval)
      this.ctx.drawImage(this.image2, 500, 100, 500,500)
      document.getElementById("soundyouwin").play()
    }.bind(this),500);

  }
  isCollision() {
    for(let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      for(let j = 0; j < this.tower.bullets.length; j++) {
        let bullet = this.tower.bullets[j]
        if(element.posX + element.width > bullet.posX && bullet.posX + bullet.width > element.posX && element.posY + element.heigth > bullet.posY && bullet.posY + bullet.heigth > element.posY) {
          this.elements.splice(this.elements.indexOf(element), 1)
          this.tower.bullets.splice(this.tower.bullets.indexOf(bullet), 1)
          console.log("hola")
          this.punt++
          if (this.punt === 15){this.win()}
        }
      }
    }
  }

  countLives() {
    if (this.elements.some( element => {
     return element.posX >= 1620
    })) {
      this.live--;
      if(this.live === 0){
        this.gameOver()
     }
    
    }

  }
}
