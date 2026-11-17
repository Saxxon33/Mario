class Platform
{
	constructor (color, x, bottom, canvas)
	{
		this.type = "object";
		this.active = true;

		// Platform properties
		this.x = x;
		this.width = 300;
		this.height = 200;	

		this.bot = bottom;
		this.y = this.bot - this.height;
		this.top = this.y;
		this.lt_side = this.x;
		this.rt_side = this.x + this.width;

		this.color = color;

		// Canvs Vars
		this.Canvas = document.getElementById(canvas);;
		this.can1 = this.Canvas.getContext("2d");

	}
	
	draw ()
	{
		this.can1.fillStyle = this.color;
		this.can1.fillRect(this.x, this.y, this.width, this.height);
	}

}

export {Platform};