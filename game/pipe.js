class Pipe
{
	constructor(x, y, dir, canvas_width, canvas_height)
	{

		this.active = true;
		this.name = "pipe";
		this.x = x;
		this.y = y;
		this.width = 120;
		this.height =  canvas_height - this.y;
				
		// collision 
		this.bot = canvas_height; 
		this.top = this.y;
		this.lt_side = this.x;
		this.rt_side = this.x + this.width;

		// images
		this.pipe_end = "./img/pipe_end.png";
		this.img_pipe = "./img/pipe.png";
	}

	draw(Canvas)
	{
		//var Canvas = document.getElementById(canvas);;
		var can1 = Canvas.getContext("2d");

		var can_height = Canvas.height;
		var height =  can_height - this.y;
		this.bot = Canvas.height;

		var img = new Image();
		img.src = this.pipe_end;
		can1.drawImage(img, this.x, this.y, this.width, 50);

		var x_pos = this.x + 10;
		var y_pos = this.y + 50;
		var pipe_length = (height - 50) / 50 + 1;
		
		for (let y = 0; y <= pipe_length; y++)
		{
			var img2 = new Image();
			img2.src = this.img_pipe;
			can1.drawImage(img2, x_pos, y_pos, 100, 50);
			y_pos += 50;
		}

	}
}

export {Pipe}