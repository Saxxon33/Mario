import {Hearts} from "./hearts.js";

class Mario
{
	constructor(x, y)
	{
		this.name = "Mario";
		this.type = "player";
		this.x = x;
		this.y = y;
		this.width = 80;
		this.height = 150;
		
		this.top = this.y;
		this.bot = this.y + this.height;
		this.lt_side = this.x;
		this.rt_side = this.x + this.width;

		// this.color = color;
		this.v_x0 = 50;
		this.v_x = this.v_x0;
		this.v_j = 100;
		this.v_y = 250;
		
		//movement
		this.jump = false;
		this.right = false;
		this.left = false;

		// Images
		this.normal_img = './img/mario4.png';
		this.img = this.normal_img;
		this.rt_num = 0;
		this.walk_rt = ['./img/mario_rt.png', './img/mario_rt2.png'];
		this.lt_num = 0;
		this.walk_lt = ['./img/mario_lt.png', './img/mario_lt2.png'];
		this.jump_rt = "./img/mario_jump_rt.png";
		this.jump_lt = "./img/mario_jump_lt.png";
		this.jump_cen = "./img/mario_jump_cen.png";

		this.active = true;
		
		// health
		this.health = 4;
		this.hearts = new Hearts();
		this.damage = false;
		this.damage_cnt = 0;
	}

	// *******************************************************
	draw (Canvas)
	{
		var can1 = Canvas.getContext("2d");

		// can1.fillStyle = "red";
		// can1.fillRect(this.x, this.y, this.width, this.height);

		// Image Upload
		var img = new Image();
		img.src = this.img;
		can1.drawImage(img, this.x, this.y, this.width, this.height);

		// Draw hearts
		this.hearts.draw(Canvas);
	}

	// *******************************************************
	// Move Functions
	move_left(non_play, grav, Canvas)
	{
		if (this.jump == false)
		{
			this.chg_image("left");
			var move = this.collision("left", non_play, grav, Canvas);
			this.left = true;
			this.x -= move;
		}
	}

	move_right(non_play, grav, Canvas)
	{
		if (this.jump == false)
		{
			this.chg_image("right");
			var move = this.collision("right", non_play, grav, Canvas);
			this.right = true;
			this.x += move;
		}
	}

	move_jump(non_play, grav, Canvas)
	{
		if (this.jump == false)
		{
			this.jump = true;
			this.y -= this.v_y;
			if (this.right)
			{
				this.chg_image("jump_right");
				this.v_x = this.v_j;
				var move = this.collision("right", non_play, grav, Canvas);
				this.x += move;
				this.v_x = this.v_x0;
			}
			else if (this.left)
			{
				this.chg_image("jump_left");
				this.v_x = this.v_j;
				var move = this.collision("left", non_play, grav);
				this.x -= move;
				this.v_x = this.v_x0;
			} else {
				this.chg_image("jump_cen");
			}


		}
	}

	// ******************************************************
	control(all_obj, grav, Canvas)
	{
		this.gravity(all_obj, grav, Canvas);
		this.hearts.control(this.health);
	}

	// ********************************************************
	gravity (all_obj, grav, Canvas)
	{
		// Add Gravity
		var move_amt = this.collision("down", all_obj, grav, Canvas);
		this.y += move_amt;
		if (move_amt > 0)
			{this.jump = true;}
		this.update_coord();

	}	


	// ****************************************************
	update_coord()
	{
		this.top = this.y;
		this.bot = this.y + this.height;
		this.rt_side = this.x + this.width;
		this.lt_side = this.x;
	}

	// *******************************************************
	chg_image(dir)
	{
		// changes images
		switch (dir)
		{
			case "normal":
				this.img = this.normal_img;
				break;
			case "right":
				this.img = this.walk_rt[this.rt_num];
				var walk_len = this.walk_rt.length -1;
				if (this.rt_num == walk_len)
					{this.rt_num = 0;}
				else 
					{++this.rt_num;}
				break;
			case "left":
				this.img = this.walk_lt[this.lt_num];
				var walk_len = this.walk_lt.length -1;
				if (this.lt_num == walk_len)
					{this.lt_num = 0;}
				else 
					{++this.lt_num;}
				break;
			case "jump_left":
				this.img = this.jump_lt;
				break;
			case "jump_right":
				this.img = this.jump_rt;
				break;
			case "jump_cen":
				this.img = this.jump_cen;
				break;
		}
	}

	// *******************************************************
	collision(dir, objects, grav, Canvas)
	{
		switch (dir)
		{
			case "down": 
				//  this.jump = true;
				var land_object = false;
				var dist = null;
				for (let b in objects)
				{
					if (objects[b].name == "Random Blocks")
						{
							console.log("top: " + objects[b].top);
							console.log("bottom: " + objects[b].bot);
							console.log("right: " + objects[b].rt_side);
							console.log("left: " + objects[b].lt_side);
						}
					if (objects[b].active)
					{

						var move_dist =  this.bot + grav;
						if (move_dist >= objects[b].top && objects[b].top >= this.bot)
						{
							var x1 = this.lt_side;
							var x2 = this.rt_side; 
							var obj_x1 = objects[b].lt_side;
							var obj_x2 = objects[b].rt_side;
							var obj_y = objects[b].top;
							
							for (let i = x1; i <= x2; i++)
							{
								if (i > obj_x1 && i < obj_x2)
								{
									land_object = true;
									var dist2 = obj_y - this.bot;

								}

							}		
						}	
						if (dist == null || dist2 < dist)
							dist = dist2;		
					}
				}	
						
				// Retun distance to move down
				
				// land on object
				if (land_object)
				{
					if (dist > 0 || this.jump == true)
						{this.chg_image("normal");}
					this.jump = false;
					return dist;
				}
				
				// land on ground
				var bot2 = this.bot + grav;
				if (bot2 >= Canvas.height)
				{
					var gnd = Canvas.height - this.bot;
					if (gnd > 0)
						{this.chg_image("normal");}
					this.jump = false;
					return gnd;
				}		
				return grav;
				break;
			// ---------------------------------------------
			case "right":
				var move = true;
				var dist = null;
				var move_dist = this.x + this.width + this.v_x;
				var x2 = this.x + this.width;
				var y1 = this.y;
				var y2 = this.y + this.height;

				for (let b in objects)
				{
					if (objects[b].active)
					{
						if (move_dist >= objects[b].x &&  objects[b].x >= x2)
						{
							var obj_y1 = objects[b].y;
							var obj_y2 = objects[b].y + objects[b].height;
							for(let i= y1; i <= y2 ; i++)
							{
								if (i > obj_y1 && i < obj_y2){
									move = false;
									var dist2 = objects[b].x - (this.x + this.width);
								}
							}
						}
					}
					if (dist == null || dist2 < dist)
						dist = dist2;	
				}

				if (move) {
					var off = this.x + this.width + this.v_x;
					var off2 = this.x + this.width;
					if (off >= Canvas.width)
					{
						var dist2 = Canvas.width - off2;
						return dist2;
					} else {
						return this.v_x;
					}
				}

				
				else
					return dist;
				break;
			// -------------------------------------------
			case "left":
				var move = true;
				var dist = null;
				var move_dist = this.x - this.v_x;
				// var x2 = this.x + this.width;
				var y1 = this.y;
				var y2 = this.y + this.height;

				for (let b in objects)
				{
					if (objects[b].active)
					{
						var obj_x2 = objects[b].x + objects[b].width;
						if (move_dist <= obj_x2 &&  this.x >= obj_x2)
						{
							var obj_y1 = objects[b].y;
							var obj_y2 = objects[b].y + objects[b].height;
							for(let i= y1; i <= y2 ; i++)
							{
								if (i > obj_y1 && i < obj_y2)
									move = false;
									var dist2 = this.x - obj_x2;
							}
						}
					}
					if (dist == null || dist2 < dist)
						dist = dist2;	
				}

				if (move) {
					var off = this.x - this.v_x;
					if (off <= 0)
					{
						var dist2 = this.x;
						return dist2;
					} else {
						return this.v_x;
					}
				}
				else
					return dist;
				break;
		}
	}

	// ---------------------------------------------------------------
	is_hit()
	{
		if (this.health > 0 && this.damage == false)
		{
			this.health -= 1;
			this.damage = true;
			// console.log("Mario hit: " + this.health);
		}

		if (this.damage)
		{
			++this.damage_cnt;
		}	
		if (this.damage_cnt == 4)
		{
			this.damage_cnt = 0;
			this.damage = false;
		}
	}

	// -----------------------------------------------------------
	is_dead()
	{
		this.health = 0;
	}

} // end class

export {Mario};