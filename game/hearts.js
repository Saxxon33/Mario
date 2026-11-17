class Hearts
{
	constructor()
	{
		this.x = 5;
		this.y = 5;
		this.height = 20;
		this.width = 20;

		this.heart_num = 4;
		this.active = true;
		this.name = "hearts";
		this.type = "metric";

		// Images
		this.red = "./img/red_heart.png";
		this.black = "./img/black_heart.png";
		this.img = this.red;
	}

	// -----------------------------------------------------
	control (health)
	{
		this.heart_num = health;
	}

	// -----------------------------------------------------------
	draw (Canvas)
	{
		// Canvas
		var can1 = Canvas.getContext("2d");

		// Image Upload
		var heart_cnt = 1;
		for (let x = 0; x < 4; x++)
		{
			
			var x_pos = x * this.width + (x + 1)* 5;
			// console.log("hearts: " + this.heart_num + " vs " + heart_cnt);
			if (heart_cnt <= this.heart_num)
				{this.img = this.red;}		
			else
				{this.img = this.black;}
			
			var img = new Image();
			img.src = this.img;
			can1.drawImage(img, x_pos, this.y, this.width, this.height);
			++heart_cnt;
		}
	}
}

export {Hearts};