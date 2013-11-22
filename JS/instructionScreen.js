
var spaceBT = "            ";
var idk = new color(85,150,200);

function instructionScreen() {
	this.backButton = new defaultButton(new vector2(0.1*WIDTH, 0.1*HEIGHT), WIDTH*.066, HEIGHT*.1, "COOL", function() {
		mainHost.navigate(home);
	} );
	var textInst = new Array(
		new text("Controls", new vector2(WIDTH*.5, HEIGHT*0.2), idk, 60),
		new text(" Move Forward" + spaceBT + "W", new vector2(WIDTH*.402, HEIGHT*.4), idk, 50),
		new text("  Aim" + spaceBT + "Point", new vector2(WIDTH*.476, HEIGHT*.5), idk, 50),
		new text("Shoot" + spaceBT + "Click", new vector2(WIDTH*.473, HEIGHT*.6), idk, 50),
		new text("Kill them all", new vector2(WIDTH*.5, HEIGHT*.8), idk, 50)
	);
	this.update = function () {
		for (var i = 0; i < textInst.length; i++) {
			textInst[i].update();
		}
		this.backButton.update();
	}
	this.draw = function () {
		for (var i = 0; i < textInst.length; i++) {
			textInst[i].draw();
		}
		this.backButton.draw();
	}
}