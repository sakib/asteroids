
var keysDown = new Array();
W = 87, ESC = 27, CLICK = 0;

function input() {
	$(document).bind('keydown', function (e) {
		keysDown[e.which] = true;
	});
	$(document).bind('keyup', function (e) {
		keysDown[e.which] = false;
	});
	$(document).bind('mouseup', function (e) {
		keysDown[0] = false;
	});
	$(document).bind('mousedown', function (e) {
		keysDown[0] = true;
	});
}