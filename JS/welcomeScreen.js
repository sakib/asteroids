
function welcomeScreen() {
	this._text = new text("SpaceRocks", new vector2(WIDTH/2.0, HEIGHT/6.0), new color(255,255,255), HEIGHT*0.15);
	this._playButton = new defaultButton(new vector2(0.2*WIDTH, 0.9*HEIGHT), WIDTH*.25, HEIGHT*.1667, "Play Game", function() {
		mainHost.navigate(lev1);
	} );
	this._instButton = new defaultButton(new vector2(0.5*WIDTH, 0.9*HEIGHT), WIDTH*.25, HEIGHT*.1667, "Controls", function() {
		mainHost.navigate(inst);
	} );
	this._storyButton = new defaultButton(new vector2(0.8*WIDTH, 0.9*HEIGHT), WIDTH*.25, HEIGHT*.1667, "The Story", function() {
		mainHost.navigate(story);
	} );
	this._circ = new specialCircle(new vector2(WIDTH / 2.0, HEIGHT / 2.0), WIDTH * 0.1, new color(0,100,0), new color(0,0,255));
	this.update = function() {
		this._text.fontSize = HEIGHT * 0.15;
		this._text.center = new vector2(WIDTH/2.0, HEIGHT/6.0);
		this._text.update();
		this._playButton.update();
		this._instButton.update();
		this._storyButton.update();
	}
	this.draw = function() {
		this._text.draw();
		this._playButton.draw();
		this._instButton.draw();
		this._storyButton.draw();
		this._circ.draw(CTX);
	}
}