function startGame() {
	gameLoop();
}

let loops = 0;
let peopleVisible = false;
function gameLoop() {
	peopleVisible = !peopleVisible;
	loops++;
	if (loops < 12){
		setTimeout(gameLoop, 3000);
	}else {
		alert("Game over!");
	}
}
	