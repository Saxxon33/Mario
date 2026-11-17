// import scenes
import {pipe1, block1, block2, floor, crab1, crab2,  door1, scene1} from "./scene1.js";
import {block3, block4, block5, lava1, door2, scene2} from "./scene2.js";
import {block6, floor2, rand1, rand2, rand3, rand4, kuppa1, scene3} from "./scene3.js";

// Import Files
import {Mario} from "./game/mario.js";
import {canvas_height, canvas_width} from "./canvas.js";
import {Platform} from "./game/platform.js";
import {Game} from './game/game.js';

// Set Canvas Properteies
var Canvas = document.getElementById("canvas1");
Canvas.width = canvas_width;
Canvas.height = canvas_height;
var can1 = Canvas.getContext("2d");

// Game Variables
var grav = 200;
door1.next = scene2;
door2.next = scene3;

// Player
var play1 = new Mario(50, 50); // 510 on block floor

// Game Objects 
var game1 = new Game(play1, grav, "canvas1");
game1.new_scene(scene1);

// crab1.active = false;
// crab2.active = false;
// kuppa1.active = false;

// Game Functions
addEventListener('keydown', player_move);
addEventListener('keyup', player_stop);

// *****************************************************
var game_loop = setInterval(function (){animate()},300);
var game_on = setInterval(function (){game1.game_control();},300);

// -----------------------------------------------------------------------
function animate()
{
	//requestAnimationFrame(animate);
	can1.clearRect(0, 0, Canvas.width, Canvas.height);	
	game1.draw_can(); 

	if (play1.health == 0)
	{
		game1.game_over();
		clearInterval(game_loop);
	}

	if (kuppa1.health == 0)
	{
		game1.game_won();
		clearInterval(game_loop);
	}

}

// -----------------------------------------------------------------------



// --------------------------------------------------------------------------------
// Move Player

function player_move (event)
{
	setTimeout(function (){}, 300);
	// Move Player
	var key = event.which || event.keyCode;

	switch(key)
	{
		case 87: // w key
		case 38: //Up arrow
			play1.move_jump(game1.objs, grav, Canvas);
			break;
		case 65: // a key
		case 37: //left arrow
			play1.move_left(game1.objs, grav, Canvas);
			break;
		case 68: // d key
		case 39: //right arrow
			play1.move_right(game1.objs, grav, Canvas);
			break;
	}	
}

// ---------------------------------------------
function player_stop()
{
	var key = event.which || event.keyCode;
	//alert("key is " + key);

	switch(key)
	{
		case 65: // a key
		case 37: //left arrow
			play1.left = false;
			break;

		case 68: // d key
		case 39: //right arrow
			play1.right = false;
			break;
	}
	play1.update_coord();
}






