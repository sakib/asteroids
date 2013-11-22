function lev1Screen () {
	
	this.nextButton = new defaultButton(new vector2(WIDTH*.5,HEIGHT*.8), WIDTH*.25, HEIGHT*.1667, "Get 'em yo", function() {
		this._pause = true;
		mainHost.navigate(game);
	} );
	
	var b = true;
	this.string = new text("LEVEL 1", new vector2(WIDTH*.5,HEIGHT*.35), new color(255,255,255), 80);
	
	this._update = function update() {
		game = new gameScreen();
		game._planet.life = 30;
		game._planet.mxLife = 30;
		this._pause = false;
		b = false;
	}
	
	this.update = function update () {
		if (b) this._update();
		this.string.update();
		this.nextButton.update();
	}
	
	this.draw = function draw () {
		this.string.draw();
		this.nextButton.draw();
	}
}