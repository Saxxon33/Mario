class Door
{
	constructor (x, y, w, h)
	{
		this.type = "change";
		this.active = false; //display door
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.chg = false;
		this.next = null;
	}

	control (play)
	{
		var rt_side = this.x + this.width;
		var bot = this.y + this.height;
		if (play.x > this.x && play.rt_side < rt_side)
		{
			if (play.y > this.y && play.bot < bot)
			{
				this.chg = true;
			}
		}
	}

	// ---------------------------------------------------------
	draw (Canvas)
	{
		var can1 = Canvas.getContext("2d");

		can1.fillStyle = "cyan";
		can1.fillRect(this.x, this.y, this.width, this.height);
	}
}

export {Door};