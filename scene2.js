import {canvas_height, canvas_width} from "./canvas.js";
import {Scene} from "./game/scene.js";
import {Blocks} from './game/blocks.js';
import {Lava} from './game/lava.js';
import {Door} from "./game/door.js";

var block3 = new Blocks(0, 250, 4, "double_bricks", canvas_width, canvas_height);
var block4 = new Blocks(400, 250, 3, "double_bricks", canvas_width, canvas_height); // 560 to coonnect ot pipe
var block5 = new Blocks(800, 250, 4, "double_bricks", canvas_width, canvas_height); // 560 to coonnect ot pipe
var lava1 = new Lava(0, 400, canvas_width, canvas_height);
var door2 = new Door(880, 75, 120, 180);

// var floor = new Blocks(0, 0, 5, "block_floor", canvas_width, canvas_height);
//var pipe1 = new Pipe(850, 200, "v", canvas_width, canvas_height);

var objs = [block3, block4, block5, lava1, door2];
var scene2 = new Scene(50, 50, "#594D5B", objs); // #007FFF blue

export {block3, block4, block5, lava1, door2, scene2};