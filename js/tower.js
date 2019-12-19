class Tower{
    constructor(ctx, gameWidth){
        this.ctx = ctx;
        this.width = 50;
        this.heigth = 50;
        this.image = new Image();
        this.image.src = "images/ironhack_logo.png";
        this.posX = 250;
        this.posY = 720;
        this.direction = 1;
        this.gameWidth = gameWidth;
        
        this.bullets = []
        this.vx = 10;

        this.sound = new Audio();
        this.sound.src = "sound/bullet.mp3"

        this.setListeners()
    }

    draw(){
        
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
        this.bullets.forEach(bullet => bullet.draw())
        this.clearBullets()       
    }
    move(){
        this.posX += this.direction * this.vx;
        if(this.posX >= this.gameWidth - 280){
            this.direction = -1;
        } else if (this.posX <= this.gameWidth - 1650){
            this.direction = 1;
        }

        this.bullets.forEach(bullet => bullet.moveBullet())
    }


    setListeners() {
        document.addEventListener("keyup", function (e) {
            if (e.keyCode === 32) {
                
                this.shoot()
            }
            if (e.keyCode === 40) {
                this.direction = this.direction * -1
            }

        }.bind(this));
    }
    shoot(){

        this.sound.play()
        this.sound.currentTime = 0
        this.bullets.push(new Bullet(this.ctx, this.posX, this.posY,this.width, this.heigth))
    }

  clearBullets() {
    this.bullets = this.bullets.filter(bullet => bullet.posY >= 140 - bullet.heigth )
  }


}