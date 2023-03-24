function startGame() {
	gameLoop();
}

let loops = 0;
let peopleVisible = false;
function gameLoop() {
	peopleVisible = !peopleVisible;
	flashCharacters();
	loops++;
	if (loops < 12){
		setTimeout(gameLoop, 3000);
	}else {
		alert("Game over!");
	}
}

function flashCharacters(){
	let board = document.getElementById("board");
	let classToSet = peopleVisible ? "character visible" : "character hidden";
	for(let index = 0; index < 6; index++) {
		board.children[index].className = classToSet;
	}
}
	