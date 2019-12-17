class Score{
    constructor(ctx, punt, live){
        this.ctx = ctx;
        this.punt = punt;
        this.live = live;
        
        this.image = new Image();
        this.image.src = "images/heart.png";

        this.image1 = new Image();
        this.image1.src = "images/score.png";

    }

    draw(punt){
        this.ctx.drawImage(this.image1, 500,5,50,50);
        this.ctx.fillStyle = "#265897"
        this.ctx.font = "40px comic-sans"
        this.ctx.fillText(punt, 570, 42)
    }

    drawLive(live){
        this.ctx.drawImage(this.image, 300,0,50,50);
        this.ctx.fillStyle = "#EF011E"
        this.ctx.font = "40px comic-sans"
        this.ctx.fillText(live, 370, 39)
        
    }
}
