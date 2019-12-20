window.onload = function () {
    document.getElementById("start-button").onclick = function () {
       let game = new Game();
       game.init();
       document.getElementById('start-button').style.display = 'none';
       document.getElementById('text').style.display = 'none'; //para que no se muestre el boton una vez lo pulsamos

    };

    document.getElementById("reset-div").onclick = function () { //generar el boton una vez pierdes o ganas
        document.getElementById("reset-div").innerHTML = '';
        game = new Game();
        game.init(); 
    };

};