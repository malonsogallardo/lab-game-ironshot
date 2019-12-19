class Score{
    constructor(ctx, punt, live, fire){
        this.ctx = ctx;
        this.punt = punt;
        this.live = live;
        this.fire = fire;
        
        this.image = new Image();
        this.image.src = "images/heart.png";

        this.image1 = new Image();
        this.image1.src = "images/score.png";

        this.image2 = new Image();
        this.image2.src = "images/fire.png"

    }
    //vida
    drawLive(live){
        this.ctx.drawImage(this.image, 600,0,70,70);
        this.ctx.fillStyle = "#EF011E"
        this.ctx.font = "40px 'Press Start 2P"
        this.ctx.fillText(live, 690, 62)
        
    }
    //puntuacion
    draw(punt){
        this.ctx.drawImage(this.image1, 930,10,60,60);
        this.ctx.fillStyle = "#265897"
        this.ctx.font = "40px 'Press Start 2P"
        this.ctx.fillText(punt, 1000, 62)
    }
    //objetivos destruidos
    drawFire(fire){
        this.ctx.drawImage(this.image2, 1220,10,70,70);
        this.ctx.fillStyle = "#EF011E"
        this.ctx.font = "40px 'Press Start 2P"
        this.ctx.fillText(fire, 1300, 62)
    }
}
