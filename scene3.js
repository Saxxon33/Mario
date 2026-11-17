import {canvas_height, canvas_width} from "./canvas.js";
import {Scene} from "./game/scene.js";
import {Blocks} from './game/blocks.js';
import {Kuppa} from "./game/kuppa.js";
import {Random_Blocks} from "./game/random_block.js";

var block6 = new Blocks(0, 250, 3, "blocks", canvas_width, canvas_height);
var floor2 = new Blocks(0, 0, 5, "block_floor", canvas_width, canvas_height);
var kuppa1 = new Kuppa(400, 510, "canvas1");

var rand1 = new Random_Blocks(100, 500, 3, "blocks", canvas_width, canvas_height);
var rand2 = new Random_Blocks(250, 150, 3, "blocks", canvas_width, canvas_height);
var rand3 = new Random_Blocks(800, 400, 3, "blocks", canvas_width, canvas_height);
var rand4 = new Random_Blocks(600, 250, 3, "blocks", canvas_width, canvas_height);

var objs = [block6, floor2, rand1, rand2, rand3, rand4, kuppa1];
var scene3 = new Scene(50, 50, "#594D5B", objs); // #007FFF blue


export {block6, floor2, rand1,  rand2, rand3, rand4, kuppa1, scene3};