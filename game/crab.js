import {Mario} from "./mario.js";

class Crab extends Mario
{
	constructor(x, y) 
	{
		super(x, y);
		
		this.name = "Crab";
		this.type = "enemy";
		this.width = 100;
		this.height = 50;

		this.normal_img = './img/crab1.png';
		this.img = this.normal_img;
		this.imgs = ['./img/crab1.png', './img/crab2.png'];
		this.img_num = 0;

		this.active = true;
	}

	// ------------------------------------------------
	control(non_play, grav, play, Canvas)
	{
		this.gravity(non_play , grav, Canvas);
		if (this.active)
		{
			this.chg_img();
			
			this.hit(play);
			var task = Math.floor(Math.random() * 2);
		
			//non_play.push(play);
			switch (task)
			{
				case 0:
					// console.log("crab 0");
					this.move_right(non_play, grav, Canvas);
					break;
				case 1:
					// console.log("crab 1");
					this.move_left(non_play, grav, Canvas);
					break;
			}
		}
	
	}

	// ----------------------------------------------------
	chg_img()
	{
		this.img = this.imgs[this.img_num];
		var img_len = this.imgs.length -1;
		if (this.img_num == img_len)
			{this.img_num = 0;}
		else
			++this.img_num;
	}

	// --------------------------------------------------------
	move_left(non_play, grav, Canvas)
	{
		var move = this.collision("left", non_play, grav, Canvas);
		this.left = true;
		this.x -= move
	}

	// -------------------------------------------------------
	move_right(non_play, grav, Canvas)
	{
		var move = this.collision("right", non_play, grav, Canvas);
		this.right = true;
		this.x += move;
	}

	// -----------------------------------------------------
	hit(play)
	{
		var hit = false;
		var is_hit = false;
		// left side 
		var play_rt = play.x + play.width;
		if (this.x == play_rt)
		{
			var play_y1 = play.y;
			var play_y2 = play.y + play.height;
			for (let y = play_y1; y <= play_y2; y++)
			{
				if (y > this.y && y < this.y + this.height)
					// console.log("hit left");
					hit = true;
			}
		}
		
		// right side
		var crab_rt = this.x + this.width;
		if (crab_rt == play.x)
		{
			var play_y1 = play.y;
			var play_y2 = play.y + play.height;
			for (let y = play_y1; y <= play_y2; y++)
			{
				if (y > this.y && y < this.y + this.height)
					// console.log("hit right");
					hit = true;
			}
		}

		//top 
		var play_bot = play.y + play.height;
		if (play_bot == this.y)
		{
			var play_x1 = play.x;
			var play_x2 = play.x + play.width;
			for (let x = play_x1; x <= play_x2; x++)
			{
				if (x > this.x && x < this.x + this.width)
					// console.log("kill crab");
					is_hit = true;
			}
		}

		if (hit){
			play.is_hit();
		}
		else if (is_hit)
			this.is_hit();
	}

	// ---------------------------------------------
	is_hit()
	{
		this.active = false;
	}


}

export {Crab};