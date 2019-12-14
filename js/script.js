window.onload = function () {
    document.getElementById("start-button").onclick = function () {
       let game = new Game;
       game.init();
 /*
       function step(){
            game.clear();
            game.draw();
            window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);*/
    };


};