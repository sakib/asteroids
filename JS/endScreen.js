function endScreen() {
	
	this.string = new text("You have avenged your brethren!", new vector2(WIDTH*.5,HEIGHT*.4), new color(random(0,255),random(0,255),random(0,255)), 60);
	
	this.backButton = new defaultButton(new vector2(WIDTH*.5, HEIGHT*.7), WIDTH*.25, HEIGHT*.15, "Ok", function() {
		mainHost.navigate(home);
	} );
	
	this.update = function () {
		this.string.update();
		this.backButton.update();
	}
	
	this.draw = function () {
		this.string.draw();
		this.backButton.draw();
	}
}