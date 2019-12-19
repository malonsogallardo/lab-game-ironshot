window.onload = function () {
    document.getElementById("start-button").onclick = function () {
       let game = new Game();
       game.init();
       document.getElementById('start-button').style.display = 'none'; //para que no se muestre el boton una vez lo pulsamos

    };


};
