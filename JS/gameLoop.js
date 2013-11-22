
var back = new background(random(200,300));
var home, inst, game, story, lev1, lev2, mainHost;

function gameLoop() {
	back.start();
	lev1 = new lev1Screen();
	lev2 = new lev2Screen();
    home = new welcomeScreen();
	inst = new instructionScreen();
	game = new gameScreen();
	story = new storyScreen();
	mainHost = new host(home);
	
	this.screen = mainHost;
	this.update = function() {
		this.screen.update();
	}
	this.draw = function() {
		back.draw();
		this.screen.draw();
	}
}