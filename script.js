const game = new Game ("canvas");
const startBtn = document.getElementById('start-btn');
const title = document.getElementById("title");
const backg = document.getElementById("fondo");
const instructions = document.getElementById("instructions")
const again = document.getElementById("again-btn")
const startSound = new Audio("/audio/ding-1-14705.mp3")
const gameMusic = new Audio ("/audio/Marshmello - Alone [Monstercat Official Music Video].mp3")
const understood = document.getElementById("understood-btn")
const prefondo = document.getElementById("Prefondo");
const preSound = new Audio ("/audio/F.O.O.L - Duality [Monstercat Release].mp3")


startBtn.addEventListener('click', () => {
    startBtn.classList.add("hidden");
	title.classList.add("hidden");
	backg.classList.add("hidden");
	instructions.classList.remove("hidden");
	preSound.pause();
	startSound.play();
	startSound.volume = 0.01;
	game.start();
	gameMusic.play();
	gameMusic.volume = 0.5;
});

document.addEventListener('keydown', function(event) {
	event.preventDefault(); //esto es para que al pulsar el espacio no se ejecute el boton start muchas veces
	game.onKeyDown(event);
});


again.addEventListener('click', () => { 
	again.classList.add("hidden");
	gameMusic.play();
	startBtn.click();
});

understood.addEventListener('click', () =>{
	understood.classList.add("hidden");
	backg.classList.remove("hidden");
	prefondo.classList.add("hidden");
	preSound.play();
	preSound.volume = 0.2;

})

