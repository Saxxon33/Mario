import {Blocks} from './blocks.js';

class Random_Blocks extends Blocks
{
	constructor(x, y, num, style, canvas_width, canvas_height)
	{
		super(x, y, num, style, canvas_width, canvas_height);
	
		this.x = x;
		this.y = y;
		this.style = "blocks";
		this.height = 40;
		this.num = 3;
		this.active = true;
		this.type = "trap";
		this.count = 0;
		this.name = "Random Blocks";
	
	}

	// --------------------------------------------------------

	control()
	{
		if (this.count == 0)
		{
			var extra = Math.floor(Math.random() * 10);
			this.num = extra;
			this.width = this.num * this.height;
			this.update_coord();
			console.log(this.width);
		}
		

		++this.count;
		if (this.count == 10)
		{
			this.count = 0;
		}
	}

	// ----------------------------------------------------------
	update_coord()
	{
		this.top = this.y;
		this.bot = this.y + this.height;
		this.rt_side = this.x + this.width;
		this.lt_side = this.x;
	}

}

export {Random_Blocks};