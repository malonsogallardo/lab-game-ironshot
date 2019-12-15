class Tower{
    constructor(ctx, width, heigth,keys){
        this.ctx = ctx;
        this.width = 50;
        this.heigth = 50;
        this.image = new Image();
        this.image.src = "images/ironhack_logo.png";
        this.posX = 0;
        this.posY = 500;
        this.switch = false;

        this.vx = 10;




        this.keys = keys;
        //console.log(this.keys)
        this.setListeners()
    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
    }
    move(){
        if(this.switch === false){
            this.posX += this.vx;
        } else{
            this.posX -= this.vx;
        }
        if(this.posX === 850){
            this.switch = true;
        } else if (this.posX === 10){
            this.switch = false;
        }
        //if (this.posX === 890) {
          //  this.posX -= this.vx;
       // }
    }

    setListeners() {
        document.addEventListener("keydown", function (e) {
            if (e.keyCode === 32) {
                console.log("space")
            }
        });
    }


}