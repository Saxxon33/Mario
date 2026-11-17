import {Mario} from "./mario.js";

class Kuppa extends Mario
{
	constructor(x, y, canvas) 
	{
		super(x, y, canvas);
		
		this.x = x;
		this.y = y;

		this.name = "Kuppa";
		this.type = "enemy";
		this.width = 100;
		this.height = 150;

		this.top = this.y;
		this.bot = this.y + this.height;
		this.lt_side = this.x;
		this.rt_side = this.x + this.width;

		// Images
		this.normal_img = './img/kuppa1.png';
		this.img = this.normal_img;
		this.rt_num = 0;
		this.walk_rt = ['./img/kuppa2.png', './img/kuppa3.png', './img/kuppa1.png'];
		this.lt_num = 0;
		this.walk_lt = ['./img/kuppa1_lt.png', './img/kuppa2_lt.png', './img/kuppa3_lt.png'];
		this.jump_rt = "./img/kuppa_jump_rt.png";
		this.jump_lt = "./img/kuppa_jump_lt.png";
		this.jump_cen = "./img/kuppa_jump_rt.png";

		this.active = true;
		this.health = 3;
		this.face_rt = false;
		this.jump = false;
		this.task_cnt = 0;
		this.task = 0;
		this.damage = false;
		this.damage_cnt = 0;
	}

	// ---------------------------------------------------------------------------
	control(non_play, grav, play, Canvas)
	{
		//this.move_right(non_play, grav);
		if (this.active)
		{
			this.gravity(non_play, grav, Canvas);
			this.hit(play);
			this.turn_face(play);

				if (this.task_cnt == 0)
				{
					this.task = Math.floor(Math.random() * 5);
				}
			
				//non_play.push(play);
				switch (this.task)
				{
					case 0:
						// console.log("crab 0");
						this.move_right(non_play, grav, Canvas);
						++this.task_cnt;
						break;
					case 1:
						// console.log("crab 1");
						this.move_left(non_play, grav, Canvas);
						++this.task_cnt;
						break;
					case 2:
						if (this.face_rt == true){
							this.right = true;
							this.move_jump(non_play, grav, Canvas);
							this.right = false;
						} else {
							this.left = true;
							this.move_jump(non_play, grav, Canvas);
							this.left = false;
						}
						this.task_cnt = 4;
						break;
					case 3:
						++this.task_cnt;
						break;
					case 4:
						++this.task_cnt;
						break;
				}
				if (this.task_cnt == 4)
				{
					this.task_cnt = 0;
				}
		}
	}

	// --------------------------------------------------
	turn_face(play)
	{
		if (play.x <= this.x){
			this.img = './img/kuppa1_lt.png';
			this.face_rt = false;
		} else if (play.x >= this.x) {
			this.img = './img/kuppa1.png';
			this.face_rt = false;
		}
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
		var kuppa_rt = this.x + this.width;
		if (kuppa_rt == play.x)
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
		if (this.health > 0 && this.damage == false)
		{
			this.health -= 1;
			this.damage = true;
			// console.log("Mario hit: " + this.health);
		} 
		if (this.health == 0)
		{
			this.active = false;
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

}

export {Kuppa};