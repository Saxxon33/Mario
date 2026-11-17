class Blocks
{
	constructor(x, y, num, style, canvas_width, canvas_height)
	{
		// Canvs Vars

		this.style = style;
		this.name = "blocks";
		this.type = "object";
		this.active = true;
		this.x = x;
		this.y = y;

		switch (style)
		{
			case "bricks":
				this.img = "./img/bricks2.png";
				this.block = 60;
				this.num = num;
				this.width = this.num * this.block;
				this.height = this.block;
				break;
			case "blocks":
				this.img = "./img/block2.png";
				this.block = 40;
				this.num = num;
				this.width = this.num * this.block;
				this.height = this.block;
				break;
			case "block_floor":
				this.img = "./img/block2.png";
				this.x = 0;
				this.block = 40;
				this.height = this.block;	
				this.y = canvas_height - this.height;
				this.width = canvas_width;
				this.num = canvas_width / this.block + canvas_width % this.block;			
				break;
			case "double_bricks":
				this.img = "./img/bricks2.png";
				this.block = 60;
				this.num = num;
				this.width = this.num * this.block;
				this.height = this.block * 2;
				break;

		}

		// Collisions Variables
		this.top = this.y;
		this.bot = this.y + this.height;
		this.lt_side = this.x;
		this.rt_side = this.x + this.width;

	}

	// ------------------------------------------------------------
	draw(Canvas)
	{
		var can1 = Canvas.getContext("2d");
		var y2 = this.y + this.block; // for double bricks

		for(let x=0;  x< this.num; x++)
		{
			var x_pos = this.x + this.block * x;
			var img = new Image();
			img.src = this.img;
			can1.drawImage(img, x_pos, this.y, this.block, this.block);
			if (this.style == "double_bricks")
				{can1.drawImage(img, x_pos, y2, this.block, this.block);}

		}

		// can1.fillStyle = "green";
		// can1.fillRect(this.x, this.y, this.width, this.height);

	}
}

export {Blocks};