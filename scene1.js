import {canvas_height, canvas_width} from "./canvas.js";
import {Scene} from "./game/scene.js";
import {Crab} from "./game/crab.js";
import {Blocks} from './game/blocks.js';
import {Pipe} from './game/pipe.js';
import {Door} from "./game/door.js";

var block1 = new Blocks(200, 540, 3, "double_bricks", canvas_width, canvas_height);
var block2 = new Blocks(560, 250, 5, "bricks", canvas_width, canvas_height); // 560 to coonnect ot pipe
var block3 = new Blocks(680, 450, 3, "bricks", canvas_width, canvas_height); // 560 to coonnect ot pipe
var floor = new Blocks(0, 0, 5, "block_floor", canvas_width, canvas_height);
var pipe1 = new Pipe(850, 200, "v", canvas_width, canvas_height);
var door1 = new Door(860, 45, 120, 180);

var crab1 = new Crab(850, canvas_height - 50);
var crab2 = new Crab(700, 200);

var objs = [pipe1, block1, block2, block3, floor, crab1, crab2, door1];
var scene1 = new Scene(50, 510, "#007FFF", objs); // #007FFF blue

export {pipe1, block1, block2, block3, floor, crab1, crab2, door1, scene1};